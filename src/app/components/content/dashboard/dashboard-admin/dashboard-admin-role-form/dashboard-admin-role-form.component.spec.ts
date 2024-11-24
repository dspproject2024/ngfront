import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminRoleFormComponent } from './dashboard-admin-role-form.component';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Role } from '../../../../../models/role.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardAdminRoleFormComponent', () => {
  let component: DashboardAdminRoleFormComponent;
  let fixture: ComponentFixture<DashboardAdminRoleFormComponent>;
  let roleServiceSpy: jasmine.SpyObj<RoleService>;

  const mockRole: Role = {
    id: 362,
    roleName: 'ROLE_ADMIN',
    createdAt: new Date('2024-08-01T21:56:44Z'),
    updatedAt: new Date('2024-08-01T21:56:44Z'),
  };

  const mockActivatedRouteEditMode = {
    snapshot: {
      paramMap: convertToParamMap({ id: '362' }), // Mock role ID in edit mode
    },
  };

  const mockActivatedRouteCreateMode = {
    snapshot: {
      paramMap: convertToParamMap({}), // No ID for create mode
    },
  };

  beforeEach(async () => {
    roleServiceSpy = jasmine.createSpyObj('RoleService', [
      'getRole',
      'createRole',
      'updateRole',
    ]);

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule], // Use HttpClientTestingModule for testing
      declarations: [DashboardAdminRoleFormComponent],
      providers: [
        { provide: RoleService, useValue: roleServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRouteEditMode }, // Default to edit mode
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load role in edit mode if role ID is provided', () => {
    roleServiceSpy.getRole.and.returnValue(of(mockRole));

    component.ngOnInit();

    expect(roleServiceSpy.getRole).toHaveBeenCalledWith(362);
    expect(component.isEditMode).toBeTrue();
    expect(component.role).toEqual(mockRole);
  });

  it('should initialize in create mode if no role ID is provided', async () => {
    await TestBed.resetTestingModule(); // Reset TestBed to allow reconfiguration
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [DashboardAdminRoleFormComponent],
      providers: [
        { provide: RoleService, useValue: roleServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRouteCreateMode },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminRoleFormComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    expect(component.isEditMode).toBeFalse();
    expect(component.role).toBeUndefined();
  });

  it('should call createRole when saving a new role', () => {
    component.role = {
      id: 600,
      roleName: 'ROLE_USER',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    component.isEditMode = false;
    roleServiceSpy.createRole.and.returnValue(of(mockRole)); // Return a Role object

    component.saveRole();

    expect(roleServiceSpy.createRole).toHaveBeenCalledWith(component.role);
  });

  it('should call updateRole when updating an existing role', () => {
    component.role = mockRole;
    component.isEditMode = true;
    roleServiceSpy.updateRole.and.returnValue(of(mockRole)); // Return a Role object

    component.saveRole();

    expect(roleServiceSpy.updateRole).toHaveBeenCalledWith(mockRole);
  });
});
