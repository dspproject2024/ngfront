// src/app/services/avis.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../models/avis.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all comments for a habitat
  getCommentsByHabitat(id: number): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.apiUrl}/aviss?id=${id}`);
  }

  // Get a specific comment by ID
  getCommentById(id: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.apiUrl}/aviss/${id}`);
  }

  // Post a new comment
  createComment(avis: Avis): Observable<Avis> {
    return this.http.post<Avis>(`${this.apiUrl}/aviss`, avis);
  }

  // Update an existing comment
  updateComment(id: number, avis: Avis): Observable<Avis> {
    return this.http.put<Avis>(`${this.apiUrl}/aviss/${id}`, avis);
  }

  // Delete a comment
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/aviss/${id}`);
  }
}
