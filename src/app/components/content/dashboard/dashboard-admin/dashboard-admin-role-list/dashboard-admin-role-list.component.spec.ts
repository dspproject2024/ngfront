import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DashboardAdminRoleListComponent } from './dashboard-admin-role-list.component';
import { RoleService } from "../../../../../services/role.service";
import { of } from "rxjs";

describe('DashboardAdminRoleListComponent', () => {
  let component: DashboardAdminRoleListComponent;
  let fixture: ComponentFixture<DashboardAdminRoleListComponent>;
  let mockRoleService: jasmine.SpyObj<RoleService>;

  beforeEach(async () => {
    // Création du mock de RoleService avec des méthodes simulées
    mockRoleService = jasmine.createSpyObj('RoleService', ['getRoles', 'deleteRole']);

    // Configuration des retours simulés pour getRoles et deleteRole
    mockRoleService.getRoles.and.returnValue(of([
      {
        id: 1,
        roleName: 'Admin',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-15'),
      },
      {
        id: 2,
        roleName: 'User',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-20'),
      },
    ]));

    mockRoleService.deleteRole.and.returnValue(of()); // Simule une suppression réussie

    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleListComponent],
      imports: [HttpClientTestingModule], // Ajout de HttpClientTestingModule
      providers: [
        { provide: RoleService, useValue: mockRoleService }, // Injection du mock
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load roles on initialization', () => {
    component.ngOnInit(); // Appelle l'initialisation
    fixture.detectChanges(); // Applique les changements au DOM

    expect(mockRoleService.getRoles).toHaveBeenCalled(); // Vérifie que getRoles a été appelé
    expect(component.roles.length).toBe(2); // Vérifie que 2 rôles ont été chargés
    expect(component.roles[0].roleName).toBe('Admin'); // Vérifie le premier rôle
    expect(component.roles[1].roleName).toBe('User'); // Vérifie le deuxième rôle
  });

  it('should delete a role', () => {
    // Initialise les rôles avec des données mockées
    component.roles = [
      { id: 1, roleName: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, roleName: 'User', createdAt: new Date(), updatedAt: new Date() },
    ];

    // Supprime le rôle avec l'ID 1
    component.deleteRole(1);

    // Vérifie que `deleteRole` a été appelé avec l'ID correct
    expect(mockRoleService.deleteRole).toHaveBeenCalledWith(1);

    // Attendre que l'opération asynchrone soit complétée
    mockRoleService.deleteRole(1).subscribe(() => {
      // Vérifie qu’il ne reste qu’un seul rôle
      expect(component.roles.length).toBe(1);

      // Vérifie que le rôle restant est celui avec l'ID 2
      expect(component.roles[0].id).toBe(2);
    });
  });



});
