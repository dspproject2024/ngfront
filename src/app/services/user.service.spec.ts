import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { GetApiService } from './get-api.service';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockUser: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    roles: ['ROLE_USER'],
    isActive: true,
  };

  const mockUsers: User[] = [
    mockUser,
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '0987654321',
      roles: ['ROLE_ADMIN'],
      isActive: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        {
          provide: GetApiService,
          useValue: { getApi: () => environment.apiUrl },
        },
      ],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify all HTTP requests are completed
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all users', () => {
    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should create a new user', () => {
    const newUser: User = {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phoneNumber: '1122334455',
      roles: ['ROLE_USER'],
      isActive: true,
    };

    service.createUser(newUser).subscribe((user) => {
      expect(user).toEqual(newUser);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('POST');
    req.flush(newUser);
  });

  it('should update an existing user', () => {
    const updatedUser: User = {
      ...mockUser,
      lastName: 'Doe Updated',
    };

    service.updateUser(mockUser.id!, updatedUser).subscribe((user) => {
      expect(user).toEqual(updatedUser);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/users/${mockUser.id}`
    );
    expect(req.request.method).toBe('PUT');
    req.flush(updatedUser);
  });

  it('should delete a user', () => {
    const userId = 1;

    service.deleteUser(userId).subscribe((response) => {
      expect(response).toBeNull(); // Check for `null` as Angular uses `null` for DELETE responses
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users/${userId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Respond with `null`
  });

  it('should handle errors gracefully during update', () => {
    const updatedUser: User = { ...mockUser, lastName: 'Doe Updated' };

    service.updateUser(mockUser.id!, updatedUser).subscribe({
      next: () => fail('Expected error, but got a response'),
      error: (error) => {
        expect(error.status).toBe(400);
      },
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/users/${mockUser.id}`
    );
    req.flush('Error occurred', { status: 400, statusText: 'Bad Request' });
  });
});
