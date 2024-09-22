// habitat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitat } from '../models/habitat.model';  // Assuming you have a Habitat model defined

@Injectable({
  providedIn: 'root'
})
export class HabitatService {
  private apiUrl = 'https://localhost:8000/api/habitats';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all habitats
  getHabitats(): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(this.apiUrl)  ;
  }
  

  // Fetch a habitat by ID
  getHabitatById(id: number): Observable<Habitat> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Habitat>(url);
  }
}
