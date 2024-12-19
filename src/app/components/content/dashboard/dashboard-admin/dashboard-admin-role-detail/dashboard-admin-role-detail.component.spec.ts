import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminRoleDetailComponent } from './dashboard-admin-role-detail.component';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';
import {of, throwError} from 'rxjs';
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
    mockRoleService = jasmine.createSpyObj('RoleService', ['getRole']);
    mockRoleService.getRole.and.returnValue(of(mockRole)); // Par défaut, retourne un rôle valide

    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleDetailComponent],
      providers: [
        { provide: RoleService, useValue: mockRoleService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleDetailComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the role details on init', () => {
    fixture.detectChanges();

    expect(mockRoleService.getRole).toHaveBeenCalledWith(1);
    expect(component.role).toEqual(mockRole);
  });


  it('should render the role details in the template', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const idElement = compiled.querySelector('p:nth-of-type(1)')?.textContent;
    const roleNameElement = compiled.querySelector('p:nth-of-type(2)')?.textContent;

    expect(idElement).toContain('ID: 1');
    expect(roleNameElement).toContain('Nom: Admin');
  });


  it('should handle undefined role gracefully', () => {
    mockRoleService.getRole.and.returnValue(of(undefined)); // Simule une réponse vide
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // Vérifie que la section des détails du rôle n'est pas rendue
    expect(compiled.querySelector('.role-details')).toBeNull();

    // Vérifie que le message d'absence de données est affiché
    const noDataMessage = compiled.querySelector('p')?.textContent;
    expect(noDataMessage).toContain('Aucune donnée disponible.');
    expect(component.role).toBeUndefined();
  });




  it('should handle error when role service fails', () => {
    mockRoleService.getRole.and.returnValue(throwError(() => new Error('Service error'))); // Simule une erreur
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // Vérifie que la section des détails du rôle n'est pas rendue
    expect(compiled.querySelector('.role-details')).toBeNull();

    // Vérifie que le message d'erreur est affiché
    const errorMessage = compiled.querySelector('p')?.textContent;
    expect(errorMessage).toContain('Erreur lors du chargement du rôle.');

    // Vérifie que le rôle est indéfini
    expect(component.role).toBeUndefined();
  });

});
