import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitat } from './../models/habitat.model';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {
  private apiUrl = 'https://localhost:8000/api';  // Définit l'URL de base de ton API

  constructor(private http: HttpClient) {}

  // Méthode pour créer un habitat
  createHabitat(habitat: Partial<Habitat>): Observable<Habitat> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/ld+json'
    });

    return this.http.post<Habitat>(`${this.apiUrl}/habitats`, habitat, { headers });
  }
  
  uploadImages(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/upload-images`, formData, { headers });
  }

    // Nouvelle méthode pour récupérer une image via son @id
    getImage(imageId: string): Observable<any> {
      return this.http.get(`${this.apiUrl}${imageId}`);
    }

}
