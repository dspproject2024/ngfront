import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// Correction de l'import pour jwtDecode
import {jwtDecode} from 'jwt-decode';  
import { GetApiService } from './get-api.service';
import { User } from '../models/user.model';  // Assurez-vous que le modèle User est correct

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    // Obtention de l'URL de l'API depuis GetApiService
    this.apiUrl = this.getApi.getApi();
  }

  // Méthode d'inscription pour créer un nouvel utilisateur
  register(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(user), { headers });
  }

  // Méthode de connexion pour envoyer les identifiants et sauvegarder le token JWT
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials).pipe(
      tap((response: any) => {
        // Sauvegarde du token JWT dans le localStorage après une connexion réussie
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Méthode pour vérifier si l'utilisateur est connecté (basée sur le JWT)
  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('token');
  }

  // Méthode pour vérifier si l'utilisateur est authentifié (basée sur le JWT)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false; // Si pas de token, l'utilisateur n'est pas authentifié
    }

    try {
      // Décoder le token JWT pour vérifier l'expiration
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      // Retourne true si le token n'est pas expiré
      return decodedToken.exp > currentTime;
    } catch (error) {
      // Si le décodage échoue, retourne false
      return false;
    }
  }

  // Méthode pour décoder le token
  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return jwtDecode(token);  // Utilisation de jwtDecode pour décoder le token
    }
    return null;
  }
}
