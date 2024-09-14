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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    // Use the service to fetch categories
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        // Assuming the API returns categories in 'hydra:member'
        this.categories = data['hydra:member'] || [];
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
