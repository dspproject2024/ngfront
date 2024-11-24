import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarMainComponent } from './navbar-main.component';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarMainComponent', () => {
  let component: NavbarMainComponent;
  let fixture: ComponentFixture<NavbarMainComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'logout']);
    mockAuthService.isLoggedIn.and.returnValue(false);

    await TestBed.configureTestingModule({
      declarations: [NavbarMainComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out and redirect on logout', () => {
    mockAuthService.isLoggedIn.and.returnValue(true);
    const navigateSpy = spyOn(router, 'navigate');
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
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
    const link = fixture.debugElement.query(By.css('a[routerLink="/list-appart"]'));
    expect(link).toBeTruthy();
  });

  it('should contain a button to publish habitat', () => {
    mockAuthService.isLoggedIn.and.returnValue(true);
    component.ngOnInit();
    fixture.detectChanges();

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

    const loginButton = fixture.debugElement.query(By.css('.btn[routerLink="/login"]'));
    expect(loginButton).toBeNull();
  });
});
