import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  categories: Category[] = []; // Use the Category model
  filteredThreeCategories: Category[] = []; // Store the first three categories

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  // Fetch all categories
  fetchCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        // Assuming the API returns categories in 'hydra:member'
        this.categories = data['hydra:member'] || [];
        this.filteredThreeCategory(); // Filter the first three categories after fetching
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Filter and return the first three categories
  filteredThreeCategory(): void {
    this.filteredThreeCategories = this.categories.slice(0, 3);
  }
}
