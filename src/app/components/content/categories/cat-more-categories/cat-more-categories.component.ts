import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-more-categories',
  templateUrl: './cat-more-categories.component.html',
  styleUrls: ['./cat-more-categories.component.css']
})
export class CatMoreCategoriesComponent implements OnInit {
  moreCategories: Category[] = []; // To store more categories dynamically

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchMoreCategories();
  }

  // Fetch all categories and store the remaining ones as "more categories"
  fetchMoreCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        // Vérifie que `categories` contient bien un tableau avant d'utiliser `slice`
        if (Array.isArray(categories)) {
          this.moreCategories = categories.slice(3, 5);
        } else {
          console.error('Categories data is not an array:', categories);
          this.moreCategories = [];
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
