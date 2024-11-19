import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'; // Import the service
import { Category } from '../../../../models/category.model'; // Import the model

@Component({
  selector: 'app-cat-all-categories',
  templateUrl: './cat-all-categories.component.html',
  styleUrl: './cat-all-categories.component.css'
})
export class CatAllCategoriesComponent {
  moreCategories: Category[] = []; // Les catégories filtrées à afficher

  // Liste des titres de catégories que vous voulez afficher
  selectedTitles = ['Forêt', 'Eau', 'Avion', 'Bateaux', 'Yourtes', 'Vans'];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        // Filtrer les catégories pour n'afficher que celles avec les titres souhaités
        this.moreCategories = data.filter(category => this.selectedTitles.includes(category.title));
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    });
  }
  
}
