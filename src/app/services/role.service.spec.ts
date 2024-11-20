import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RoleService } from './role.service';
import { Role } from '../models/role.model';
import { environment } from '../../environments/environment';

describe('RoleService', () => {
  let service: RoleService;
  let httpMock: HttpTestingController;

  const mockRole: Role = {
    id: 1,
    roleName: 'Admin',
    createdAt: new Date('2023-01-01T10:00:00Z'),
    updatedAt: new Date('2023-01-02T10:00:00Z'),
  };

  const mockRoles: Role[] = [
    mockRole,
    {
      id: 2,
      roleName: 'User',
      createdAt: new Date('2023-01-03T10:00:00Z'),
      updatedAt: new Date('2023-01-04T10:00:00Z'),
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoleService],
    });
    service = TestBed.inject(RoleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure all HTTP requests are completed
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all roles', () => {
    service.getRoles().subscribe((roles) => {
      expect(roles.length).toBe(2);
      expect(roles).toEqual(mockRoles);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/roles`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRoles);
  });

  it('should fetch a role by ID', () => {
    const roleId = 1;

    service.getRole(roleId).subscribe((role) => {
      expect(role).toEqual(mockRole);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/roles/${roleId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRole);
  });

  it('should create a new role', () => {
    const newRole: Role = {
      id: 3,
      roleName: 'Moderator',
      createdAt: new Date('2023-01-05T10:00:00Z'),
      updatedAt: new Date('2023-01-06T10:00:00Z'),
    };

    service.createRole(newRole).subscribe((role) => {
      expect(role).toEqual(newRole);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/roles`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newRole);
    req.flush(newRole);
  });

  it('should update an existing role', () => {
    const updatedRole: Role = {
      ...mockRole,
      roleName: 'Super Admin',
    };

    service.updateRole(updatedRole).subscribe((role) => {
      expect(role).toEqual(updatedRole);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/roles/${updatedRole.id}`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedRole);
    req.flush(updatedRole);
  });

  it('should delete a role', () => {
    const roleId = 1;

    service.deleteRole(roleId).subscribe((response) => {
      expect(response).toBeNull(); // Expect null explicitly
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/roles/${roleId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Send null as the response body
  });
});
