import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  credentials: { email: string; password: string } = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Successfully logged in, navigate to another page (e.g., home)
     //   this.router.navigate(['/login']);
      },
      (error) => {
        // If there's an error, display the error message
   //     this.router.navigate(['/login']);
        this.errorMessage = 'Invalid credentials, please try again.';
      }
    );
  }
}
