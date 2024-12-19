import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../models/role.model';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin-role-form',
  templateUrl: './dashboard-admin-role-form.component.html',
  styleUrl: './dashboard-admin-role-form.component.css'
})
export class DashboardAdminRoleFormComponent implements OnInit {
  role: Role = { id: 0, roleName: '', createdAt: new Date(), updatedAt: new Date() }; // Initialisation par défaut
  isEditMode = false;

  constructor(private roleService: RoleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const roleId = paramMap.get('id');
      if (roleId) {
        this.isEditMode = true;
        this.roleService.getRole(+roleId).subscribe({
          next: (role) => {
            this.role = role ?? { id: 0, roleName: '', createdAt: new Date(), updatedAt: new Date() };
          },
          error: () => {
            this.isEditMode = false;
            this.role = { id: 0, roleName: '', createdAt: new Date(), updatedAt: new Date() };
          },
        });
      } else {
        this.isEditMode = false;
        this.role = { id: 0, roleName: '', createdAt: new Date(), updatedAt: new Date() };
      }
    });
  }



  saveRole(): void {
    if (this.isEditMode) {
      this.roleService.updateRole(this.role).subscribe();
    } else {
      this.roleService.createRole(this.role).subscribe();
    }
  }
}


