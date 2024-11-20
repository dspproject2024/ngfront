import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterTestingModule } from '@angular/router/testing'; // Mock routing
import { AuthService } from '../../../../services/auth.service';
import { of, throwError } from 'rxjs';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['register']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [RegisterFormComponent],
      providers: [{ provide: AuthService, useValue: authSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error if form is invalid on submit', () => {
    const form = { valid: false } as any;
    component.onSubmit(form);

    expect(component.errorMessage).toBe(
      'Veuillez remplir correctement tous les champs du formulaire.'
    );
  });

  it('should display error if passwords do not match', () => {
    component.user.password = 'password123';
    component.user.reTypePassword = 'password456';

    const form = { valid: true } as any;
    component.onSubmit(form);

    expect(component.errorMessage).toBe(
      'Les mots de passe ne correspondent pas.'
    );
  });

  it('should call AuthService.register and navigate on successful registration', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    authServiceSpy.register.and.returnValue(of({})); // Mock successful response

    component.user.password = 'password123';
    component.user.reTypePassword = 'password123';

    const form = { valid: true } as any;
    component.onSubmit(form);

    expect(authServiceSpy.register).toHaveBeenCalledWith(component.user);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should display error if registration fails', () => {
    authServiceSpy.register.and.returnValue(throwError('Registration error'));

    component.user.password = 'password123';
    component.user.reTypePassword = 'password123';

    const form = { valid: true } as any;
    component.onSubmit(form);

    expect(authServiceSpy.register).toHaveBeenCalledWith(component.user);
    expect(component.errorMessage).toBe(
      'Une erreur est survenue lors de votre inscription, veuillez réessayer.'
    );
  });

  it('should update user roles when a role is selected', () => {
    authServiceSpy.register.and.returnValue(of({})); // Mock successful response

    component.selectedRole = 'ROLE_OWNER';
    component.user.password = 'password123';
    component.user.reTypePassword = 'password123';

    const form = { valid: true } as any;
    component.onSubmit(form);

    expect(component.user.roles).toEqual(['ROLE_OWNER']);
  });
});
