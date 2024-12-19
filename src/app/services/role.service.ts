import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import { Role } from '../models/role.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiUrl = environment.apiUrl+"/roles"; // Lien vers ton API

  constructor(private http: HttpClient) {}

  // Récupérer tous les rôles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // Récupérer un rôle par ID
  getRole(id: number): Observable<Role | undefined> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(undefined)) // Si une erreur survient, retourne undefined
    );
  }


  // Créer un nouveau rôle
  createRole(role: Role | undefined): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Mettre à jour un rôle
  updateRole(role: Role | undefined): Observable<Role | undefined> {
    const url = `${this.apiUrl}/${role?.id}`;
    return this.http.put<Role>(url, role, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Supprimer un rôle
  deleteRole(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
