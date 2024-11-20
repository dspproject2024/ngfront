import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header.component';

describe('AdminDashboardHeaderComponent', () => {
  let component: AdminDashboardHeaderComponent;
  let fixture: ComponentFixture<AdminDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render dashboard heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headingElement = compiled.querySelector('.short-heading-here2');
    expect(headingElement?.textContent).toContain('Tableau de bord');
  });

  it('should render dashboard description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptionElement = compiled.querySelector('.lorem-ipsum-dolor2');
    expect(descriptionElement?.textContent).toContain(
      'Gérez facilement les utilisateurs, les annonces et les réservations avec notre interface intuitive.'
    );
  });
});
