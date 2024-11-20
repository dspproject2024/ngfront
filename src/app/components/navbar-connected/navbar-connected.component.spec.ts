import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarConnectedComponent } from './navbar-connected.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavbarConnectedComponent', () => {
  let component: NavbarConnectedComponent;
  let fixture: ComponentFixture<NavbarConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarConnectedComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements like <app-profile>
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle profile popup visibility when profile icon is clicked', () => {
    const profileIcon = fixture.debugElement.query(By.css('#profilIcon'));
    expect(component.showProfilePopup).toBeFalse();

    profileIcon.triggerEventHandler('click', null);
    expect(component.showProfilePopup).toBeTrue();

    profileIcon.triggerEventHandler('click', null);
    expect(component.showProfilePopup).toBeFalse();
  });

  it('should toggle menu visibility when burger menu is clicked', () => {
    const menuToggler = fixture.debugElement.query(
      By.css('.header__nav-toggler')
    );
    expect(component.isMenuActive).toBeFalse();

    menuToggler.triggerEventHandler('click', null);
    expect(component.isMenuActive).toBeTrue();

    menuToggler.triggerEventHandler('click', null);
    expect(component.isMenuActive).toBeFalse();
  });

  it('should close the menu when a navigation link is clicked', () => {
    const navLink = fixture.debugElement.query(By.css('.link-one6 a'));
    component.isMenuActive = true; // Simulate the menu being active
    fixture.detectChanges();

    navLink.triggerEventHandler('click', null);
    expect(component.isMenuActive).toBeFalse();
  });

  it('should render the profile popup when showProfilePopup is true', () => {
    component.showProfilePopup = true;
    fixture.detectChanges();

    const profilePopup = fixture.debugElement.query(By.css('.profile-popup'));
    expect(profilePopup).toBeTruthy();
  });

  it('should not render the profile popup when showProfilePopup is false', () => {
    component.showProfilePopup = false;
    fixture.detectChanges();

    const profilePopup = fixture.debugElement.query(By.css('.profile-popup'));
    expect(profilePopup).toBeNull();
  });
});
