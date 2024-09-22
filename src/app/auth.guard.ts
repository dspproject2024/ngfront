import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {  // Utilise isAuthenticated() pour vérifier la validité du token
      return true;  // Autoriser l'accès si l'utilisateur est authentifié
    } else {
      this.router.navigate(['/error-page']);  // Rediriger vers la page de connexion si non authentifié
      return false;  // Bloquer l'accès à la route
    }
  }
}
