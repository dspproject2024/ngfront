import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-all-categories',
  templateUrl: './cat-all-categories.component.html',
  styleUrl: './cat-all-categories.component.css'
})
export class CatAllCategoriesComponent {
  moreCategories: Category[] = []; // To store the filtered categories
  selectedTitles = ['Forêt', 'Eau', 'Avion', 'Bateaux', 'Yourtes', 'Vans']; // Titles to filter

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchMoreCategories();
  }

  // Fetch all categories and filter by the selected titles
  fetchMoreCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        const categories = data['hydra:member'] || []; // Get all categories
        this.moreCategories = categories.filter((category: Category) =>
          this.selectedTitles.includes(category.title)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
