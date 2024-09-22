import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';  // Import direct de jwt-decode

// Interface pour représenter le payload du JWT
interface DecodedToken {
  name: string;  // Ou 'username', selon ce qui est stocké dans ton token
  email: string;
  exp: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string = 'Utilisateur';  // Variable pour stocker le nom de l'utilisateur

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Récupérer le token directement depuis le localStorage
    const token = localStorage.getItem('token');

    // Décoder le token si disponible
    if (token) {
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
      if (decodedToken && decodedToken.name) {
        this.userName = decodedToken.name;  // Assigner le nom d'utilisateur
      }
    }
  }

  logout() {
    // Supprimer le token et rediriger vers la page de connexion
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
