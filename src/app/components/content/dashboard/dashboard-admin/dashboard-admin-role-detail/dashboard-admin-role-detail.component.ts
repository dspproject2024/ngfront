import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../models/role.model';
import { RoleService } from '../../../../../services/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin-role-detail',
  templateUrl: './dashboard-admin-role-detail.component.html',
  styleUrls: ['./dashboard-admin-role-detail.component.css']
})
export class DashboardAdminRoleDetailComponent implements OnInit {
  role: Role | undefined;
  errorMessage: string | null = null;

  constructor(private roleService: RoleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const roleId = this.route.snapshot.paramMap.get('id');
    if (roleId) {
      this.roleService.getRole(+roleId).subscribe(
        (role) => {
          if (role) {
            this.role = role;
            this.errorMessage = null;
          } else {
            this.errorMessage = 'Aucune donnée disponible.';
            this.role = undefined;
          }
        },
        (error) => {
          this.errorMessage = 'Erreur lors du chargement du rôle.';
          this.role = undefined;
        }
      );
    } else {
      this.errorMessage = 'ID de rôle invalide.';
    }
  }

}
