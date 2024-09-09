import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Enregistrer le token JWT dans le localStorage (géré par AuthService déjà)
        // Rediriger l'utilisateur vers une autre page après la connexion (par exemple, page d'accueil)
        this.router.navigate(['/home']);
      },
      (error) => {
        // Gérer les erreurs de connexion
        this.errorMessage = 'Identifiants incorrects';
      }
    );
  }
}
