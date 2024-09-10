import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  private apiUrl = 'https://localhost:8000/api'; // Corrected to HTTP for local development
  constructor() { }

  getApi(): string {
    return this.apiUrl;
  }
}
