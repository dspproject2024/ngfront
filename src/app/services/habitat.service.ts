import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Habitat } from '../models/habitat.model'; // Assuming you have a Habitat model defined
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HabitatService {
  private apiUrl = `${environment.apiUrl}/habitats`;

  constructor(private http: HttpClient) {}

  // Fetch all habitats
  getHabitats(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des habitats :', error);
        return throwError(() => error);
      })
    );
  }


  // Fetch a habitat by ID
  getHabitatById(id: number): Observable<Habitat> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Habitat>(url).pipe(
      catchError((error) => {
        console.error(`Erreur lors de la récupération de l'habitat avec ID ${id} :`, error);
        return throwError(() => error);
      })
    );
  }

  // Fetch an image by its ID
  getImage(imageId: string): Observable<Blob> {
    const url = `${this.apiUrl}${imageId}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de l\'image :', error);
        return throwError(() => error);
      })
    );
  }
}
