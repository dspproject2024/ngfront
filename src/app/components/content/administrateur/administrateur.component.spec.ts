import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrateurComponent } from './administrateur.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AdministrateurComponent', () => {
  let component: AdministrateurComponent;
  let fixture: ComponentFixture<AdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministrateurComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow usage of custom elements
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render admin profile dropdown', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-admin-profile-dropdown')).toBeTruthy();
  });

  it('should render admin dashboard header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-admin-dashboard-header')).toBeTruthy();
  });

  it('should render user management feature section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featureSection = compiled.querySelector(
      'app-admin-feature-section[title="Gérer utilisateurs"]'
    );
    expect(featureSection).toBeTruthy();
  });

  it('should render roles management feature section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featureSection = compiled.querySelector(
      'app-admin-feature-section[title="Gérer rôles"]'
    );
    expect(featureSection).toBeTruthy();
  });
});
