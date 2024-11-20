import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For HttpClient
import { of, throwError } from 'rxjs';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['login']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule], // Import FormsModule
      declarations: [LoginFormComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.login and navigate on successful login', () => {
    authServiceMock.login.and.returnValue(of({ token: 'mock-token' }));
    const credentials = { email: 'test@example.com', password: 'password' };

    component.credentials = credentials;
    component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalledWith(credentials);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    expect(component.errorMessage).toBeNull();
  });

  it('should set errorMessage on failed login', () => {
    authServiceMock.login.and.returnValue(throwError({ status: 401 }));
    const credentials = {
      email: 'test@example.com',
      password: 'wrong-password',
    };

    component.credentials = credentials;
    component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalledWith(credentials);
    expect(component.errorMessage).toBe('Informations de connexion invalides.');
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });
});
