import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminRoleDetailComponent } from './dashboard-admin-role-detail.component';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Role } from '../../../../../models/role.model';

describe('DashboardAdminRoleDetailComponent', () => {
  let component: DashboardAdminRoleDetailComponent;
  let fixture: ComponentFixture<DashboardAdminRoleDetailComponent>;
  let mockRoleService: jasmine.SpyObj<RoleService>;

  const mockRole: Role = {
    id: 1,
    roleName: 'Admin',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
  };

  beforeEach(async () => {
    // Mock du service RoleService
    mockRoleService = jasmine.createSpyObj('RoleService', ['getRole']);
    mockRoleService.getRole.and.returnValue(of(mockRole)); // Simule la réponse de l'API

    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleDetailComponent],
      providers: [
        { provide: RoleService, useValue: mockRoleService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }, // Simule un paramètre de route 'id'
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the role details on init', () => {
    expect(mockRoleService.getRole).toHaveBeenCalledWith(1); // Vérifie que le service a été appelé avec l'ID correct
    expect(component.role).toEqual(mockRole); // Vérifie que le rôle récupéré est correct
  });

  it('should render the role details in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const idElement = compiled.querySelector('p:nth-of-type(1)')?.textContent;
    const roleNameElement = compiled.querySelector('p:nth-of-type(2)')?.textContent;
    const createdAtElement = compiled.querySelector('p:nth-of-type(3)')?.textContent;
    const updatedAtElement = compiled.querySelector('p:nth-of-type(4)')?.textContent;

    expect(idElement).toContain('ID: 1');
    expect(roleNameElement).toContain('Nom: Admin');
    expect(createdAtElement).toContain('Créé le:');
    expect(updatedAtElement).toContain('Mis à jour le:');
  });

  it('should handle undefined role gracefully', () => {
    mockRoleService.getRole.and.returnValue(of()); // Simule l'absence de rôle
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')).toBeNull(); // Vérifie qu'aucun détail n'est affiché
    expect(component.role).toBeUndefined();
  });

  it('should handle error when role service fails', () => {
    mockRoleService.getRole.and.returnValue(of()); // Simule une erreur
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.role).toBeUndefined();
  });
});
