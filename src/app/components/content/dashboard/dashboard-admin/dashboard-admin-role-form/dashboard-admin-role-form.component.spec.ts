import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError, BehaviorSubject } from 'rxjs';

import { DashboardAdminRoleFormComponent } from './dashboard-admin-role-form.component';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Role } from '../../../../../models/role.model';

describe('DashboardAdminRoleFormComponent', () => {
  let component: DashboardAdminRoleFormComponent;
  let fixture: ComponentFixture<DashboardAdminRoleFormComponent>;
  let mockRoleService: jasmine.SpyObj<RoleService>;
  let mockActivatedRoute: { paramMap: BehaviorSubject<any> };

  const mockRole: Role = {
    id: 1,
    roleName: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    // Mock du service RoleService
    mockRoleService = jasmine.createSpyObj('RoleService', ['getRole', 'updateRole', 'createRole']);
    mockRoleService.getRole.and.returnValue(of(mockRole));
    mockRoleService.updateRole.and.returnValue(of({ ...mockRole, roleName: 'Updated Admin' }));
    mockRoleService.createRole.and.returnValue(of({ id: 2, roleName: 'New Role', createdAt: new Date(), updatedAt: new Date() }));

    // Mock d'ActivatedRoute avec BehaviorSubject
    mockActivatedRoute = {
      paramMap: new BehaviorSubject(convertToParamMap({ id: '1' })), // Initialise avec ID=1
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardAdminRoleFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: RoleService, useValue: mockRoleService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load role in edit mode', () => {
    expect(component.isEditMode).toBeTrue();
    expect(mockRoleService.getRole).toHaveBeenCalledWith(1);
    expect(component.role.roleName).toBe(mockRole.roleName);
  });

  it('should initialize in create mode if no ID is provided', () => {
    mockActivatedRoute.paramMap.next(convertToParamMap({}));

    component.ngOnInit();
    expect(component.isEditMode).toBeFalse(); // Mode création
    expect(component.role.id).toBe(0);
    expect(component.role.roleName).toBe('');
  });

  it('should handle error when getRole fails', () => {
    // Simule une erreur du service
    mockRoleService.getRole.and.returnValue(throwError(() => new Error('Erreur de chargement')));
    mockActivatedRoute.paramMap.next(convertToParamMap({ id: '2' })); // Simuler un autre ID

    component.ngOnInit();

    expect(component.isEditMode).toBeFalse(); // Le mode édition doit être désactivé
    expect(component.role.id).toBe(0); // Retourne aux valeurs par défaut
    expect(component.role.roleName).toBe(''); // Vérifie les valeurs par défaut
  });
});
