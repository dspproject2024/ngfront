// src/app/components/auth/register-form/register-form.component.ts

import { Component } from '@angular/core';
import { User } from '../../../../models/user.model'; // Import the User model
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    reTypePassword: '',
    roles: ['ROLE_USER'], // Default role
    isActive: true
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'An error occurred during registration. Please try again.';
      }
    );
  }
}
