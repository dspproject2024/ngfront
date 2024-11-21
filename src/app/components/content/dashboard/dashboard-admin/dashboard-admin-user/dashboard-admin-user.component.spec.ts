import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminUserComponent } from './dashboard-admin-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('DashboardAdminUserComponent', () => {
  let component: DashboardAdminUserComponent;
  let fixture: ComponentFixture<DashboardAdminUserComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  const mockUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      roles: ['ROLE_USER'],
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '0987654321',
      roles: ['ROLE_ADMIN'],
      isActive: true,
    },
  ];

  beforeEach(async () => {
    const userServiceMock = jasmine.createSpyObj('UserService', [
      'getUsers',
      'createUser',
      'updateUser',
      'deleteUser',
    ]);
    userServiceMock.getUsers.and.returnValue(of(mockUsers));
    userServiceMock.createUser.and.returnValue(of({}));
    userServiceMock.updateUser.and.returnValue(of({}));
    userServiceMock.deleteUser.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [DashboardAdminUserComponent],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminUserComponent);
    component = fixture.componentInstance;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on initialization', () => {
    component.ngOnInit();
    expect(userServiceSpy.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(mockUsers);
  });

  it('should call saveUser when creating a new user', () => {
    const newUser = {
      firstName: 'New',
      lastName: 'User',
      email: 'new.user@example.com',
      phoneNumber: '1122334455',
      roles: ['ROLE_USER'],
      isActive: true,
    };

    userServiceSpy.createUser.and.returnValue(of({})); // Mock service response
    component.editingUser = { ...newUser }; // Set the new user object
    component.editMode = false; // Ensure it's in create mode

    component.saveUser();

    expect(userServiceSpy.createUser).toHaveBeenCalledWith(newUser); // Match the correct call
    expect(component.editingUser).toBeNull(); // Ensure editing state reset
    expect(component.editMode).toBeFalse();
  });


  it('should call saveUser when updating an existing user', () => {
    component.editingUser = { ...mockUsers[0] }; // Set to existing user
    component.editMode = true; // Set to edit mode

    component.saveUser();

    expect(userServiceSpy.updateUser).toHaveBeenCalledWith(
      mockUsers[0].id!,
      mockUsers[0]
    );
    expect(component.editingUser).toBeNull(); // Ensure editing state reset
    expect(component.editMode).toBeFalse();
  });

  it('should call deleteUser and reload users', () => {
    component.deleteUser(mockUsers[0].id!);
    expect(userServiceSpy.deleteUser).toHaveBeenCalledWith(mockUsers[0].id!);
    expect(userServiceSpy.getUsers).toHaveBeenCalled();
  });

  it('should render the user table correctly', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('table.user-table tbody tr'));
    expect(rows.length).toBe(mockUsers.length);

    const firstRow = rows[0].nativeElement as HTMLElement;
    expect(firstRow.textContent).toContain(mockUsers[0].firstName);
    expect(firstRow.textContent).toContain(mockUsers[0].lastName);
    expect(firstRow.textContent).toContain(mockUsers[0].email);
  });
});
