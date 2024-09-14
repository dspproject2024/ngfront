import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app without needing to add it to providers array
})
export class GetApiService {

  // API URL for your backend
  private apiUrl = 'https://localhost:8000/api'; // Using HTTP for local development

  constructor() { }

  // Method to return the API URL
  getApi(): string {
    return this.apiUrl;
  }
}
