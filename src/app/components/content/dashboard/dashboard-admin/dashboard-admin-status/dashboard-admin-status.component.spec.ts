import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminStatusComponent } from './dashboard-admin-status.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardAdminStatusComponent', () => {
  let component: DashboardAdminStatusComponent;
  let fixture: ComponentFixture<DashboardAdminStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminStatusComponent],
      imports: [HttpClientModule], // Import HttpClientModule instead of HttpClient
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
