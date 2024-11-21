import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { Component } from '@angular/core';

// Mock de <app-dashboard-admin-user>
@Component({
  selector: 'app-dashboard-admin-user',
  template: '',
})
class MockDashboardAdminUserComponent {}

describe('DashboardAdminComponent', () => {
  let component: DashboardAdminComponent;
  let fixture: ComponentFixture<DashboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminComponent, MockDashboardAdminUserComponent], // Inclure le mock
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include app-dashboard-admin-user', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-dashboard-admin-user')).toBeTruthy();
  });
});
