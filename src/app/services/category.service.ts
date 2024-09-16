import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model'; // Import the Category model
import { GetApiService } from './get-api.service'; // Import the GetApiService

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string;

  constructor(private http: HttpClient, private getApi: GetApiService) {
    // Get the API base URL from the GetApiService and append /categories
    this.apiUrl = `${this.getApi.getApi()}/categories`; // Ensure URL concatenation is correct
  }

  // Fetch categories from the API
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
