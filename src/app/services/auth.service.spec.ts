import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { jwtDecode, JwtPayload } from 'jwt-decode';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', () => {
    const mockUser: User = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      password: 'password',
      reTypePassword: 'password',
      roles: ['ROLE_USER'],
      isActive: true,
    };

    service.register(mockUser).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  it('should login and store token', () => {
    const credentials = { email: 'test@example.com', password: 'password' };
    const mockResponse = { token: 'mock-token' };

    spyOn(localStorage, 'setItem');
    service.login(credentials).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mock-token');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/login_check`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should return the token from localStorage', () => {
    localStorage.setItem('token', 'mock-token');
    expect(service.getToken()).toBe('mock-token');
  });

  it('should check if user is logged in', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should log out the user', () => {
    localStorage.setItem('token', 'mock-token');
    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should decode token and check roles', () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl19.mock-signature';
    localStorage.setItem('token', mockToken);

    const roles = service.getUserRoles();
    expect(roles).toEqual(['ROLE_ADMIN']);
  });

  it('should verify if user is an admin', () => {
    const mockDecodedToken = { roles: ['ROLE_ADMIN'] } as JwtPayload;
    spyOn(service, 'getDecodedToken').and.returnValue(mockDecodedToken);

    expect(service.isAdmin()).toBeTrue();
  });

  it('should handle invalid or missing token gracefully', () => {
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should handle token expiration correctly', () => {
    expect(service.isAuthenticated()).toBeFalse();
  });
});
