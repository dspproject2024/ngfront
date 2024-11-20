import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarMainComponent } from './navbar-main.component';
import { AuthService } from '../../services/auth.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavbarMainComponent', () => {
  let component: NavbarMainComponent;
  let fixture: ComponentFixture<NavbarMainComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Create a mock AuthService
    mockAuthService = jasmine.createSpyObj('AuthService', [
      'isLoggedIn',
      'logout',
    ]);
    mockAuthService.isLoggedIn.and.returnValue(true); // Mock the user being logged in

    await TestBed.configureTestingModule({
      declarations: [NavbarMainComponent],
      imports: [RouterTestingModule], // Include RouterTestingModule for router links
      providers: [{ provide: AuthService, useValue: mockAuthService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if user is logged in on init', () => {
    expect(mockAuthService.isLoggedIn).toHaveBeenCalled();
    expect(component.isLoggedIn).toBeTrue();
  });

  it('should log out and redirect on logout', () => {
    const originalHref = window.location.href;

    // Mock `window.location.href` using `Object.defineProperty`
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' },
    });

    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(component.isLoggedIn).toBeFalse();
    expect(window.location.href).toBe('/login');

    // Restore the original `window.location.href`
    Object.defineProperty(window, 'location', { value: originalHref });
  });

  it('should toggle menu visibility when toggleMenu is called', () => {
    expect(component.isMenuActive).toBeFalse();
    component.toggleMenu();
    expect(component.isMenuActive).toBeTrue();
    component.toggleMenu();
    expect(component.isMenuActive).toBeFalse();
  });

  it('should close the menu when closeMenu is called', () => {
    component.isMenuActive = true;
    component.closeMenu();
    expect(component.isMenuActive).toBeFalse();
  });

  it('should contain a routerLink to "/list-appart"', () => {
    const compiled = fixture.debugElement.nativeElement;
    const listAppartLink = compiled.querySelector(
      'a[routerLink="/list-appart"]'
    );
    expect(listAppartLink).toBeTruthy();
  });

  it('should contain a button to publish habitat', () => {
    const publishButton = fixture.debugElement.query(By.css('.btn-add-appart'));
    expect(publishButton).toBeTruthy();
  });

  it('should contain a login button if user is not logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(false);
    component.ngOnInit();
    fixture.detectChanges();

    const loginButton = fixture.debugElement.query(By.css('.btn'));
    expect(loginButton).toBeTruthy();
  });

  it('should not show login button if user is logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(true);
    component.ngOnInit();
    fixture.detectChanges();

    const loginButton = fixture.debugElement.query(By.css('.btn'));
    expect(loginButton).toBeNull();
  });
});
