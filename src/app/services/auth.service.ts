import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwtDecode
import { GetApiService } from './get-api.service';
import {User} from "../models/user.model"; // Correct import for GetApiService

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    // Get the API URL from the GetApiService
    this.apiUrl = this.getApi.getApi(); // Call getApi() to get the base URL as a string
  }

  // Register method
  register(user: User): Observable<any> {
    // Set Content-Type to application/ld+json
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });

    // Convert the user object to JSON-LD format and send the request
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(user), { headers });
  }

  // Login method that saves JWT token
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials).pipe(
      tap((response: any) => {
        // Save the token to localStorage
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Logout method that clears the token
  logout(): void {
    localStorage.removeItem('token');
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    // Decode the token to check for expiration
    const decodedToken: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decodedToken.exp > currentTime; // Return true if token has not expired
  }
}
