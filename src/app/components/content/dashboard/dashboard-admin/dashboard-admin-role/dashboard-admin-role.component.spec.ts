import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminRoleComponent } from './dashboard-admin-role.component';
import { Component } from '@angular/core';

// Mock child components
@Component({
  selector: 'app-dashboard-admin-role-list',
  template: '<div>Role List Component</div>',
})
class MockDashboardAdminRoleListComponent {}

@Component({
  selector: 'app-dashboard-admin-role-form',
  template: '<div>Role Form Component</div>',
})
class MockDashboardAdminRoleFormComponent {}

@Component({
  selector: 'app-dashboard-admin-role-detail',
  template: '<div>Role Detail Component</div>',
})
class MockDashboardAdminRoleDetailComponent {}

describe('DashboardAdminRoleComponent', () => {
  let component: DashboardAdminRoleComponent;
  let fixture: ComponentFixture<DashboardAdminRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardAdminRoleComponent,
        MockDashboardAdminRoleListComponent,
        MockDashboardAdminRoleFormComponent,
        MockDashboardAdminRoleDetailComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the role list component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-dashboard-admin-role-list')).toBeTruthy();
  });

  it('should render the role form component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-dashboard-admin-role-form')).toBeTruthy();
  });

  it('should render the role detail component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-dashboard-admin-role-detail')).toBeTruthy();
  });
});
