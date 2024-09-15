import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwtDecode
import { GetApiService } from './get-api.service';
import { User } from '../models/user.model'; // Correct import for User model

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    // Get the API URL from the GetApiService
    this.apiUrl = this.getApi.getApi(); // Call getApi() to get the base URL as a string
  }

  // Register method to create a new user
  register(user: User): Observable<any> {
    // Set Content-Type to application/ld+json for API compatibility
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });

    // Convert the user object to JSON-LD format and send the POST request
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(user), { headers });
  }

  // Login method that sends credentials and saves the JWT token
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_check`, credentials).pipe(
      tap((response: any) => {
        // Save the JWT token to localStorage upon successful login
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Logout method to remove the token from localStorage
  logout(): void {
    localStorage.removeItem('token');
  }

  // Method to check if the user is authenticated (based on the JWT token)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false; // User is not authenticated if no token exists
    }

    try {
      // Decode the JWT token to check for expiration
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      // Return true if the token has not expired, false otherwise
      return decodedToken.exp > currentTime;
    } catch (error) {
      // If token decoding fails (e.g., invalid token), return false
      return false;
    }
  }
}