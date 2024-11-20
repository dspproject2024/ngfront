import { Component } from '@angular/core';
import { HabitatService } from '../../../../services/add-habitat-form-service';
import { Habitat } from '../../../../models/habitat.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../../../src/environments/environment';

@Component({
  selector: 'app-add-appart-form',
  templateUrl: './add-appart-form.component.html',
  styleUrls: ['./add-appart-form.component.css'],
})
export class AddHabitatFormComponent {
  habitat: Habitat = {
    title: '',
    description: '',
    slug: '',
    location: '',
    city: '',
    country: '',
    pricePerNight: 0,
    maxGuests: 0,
    amenities: [],
    availability: [],
    category: '', // Initialisation à vide
    images: [],
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    owner: undefined,
    startDate: new Date(),
    endDate: new Date(),
  };

  showPopup = false; // Gère l'affichage du popup
  categories: Category[] = []; // Stocke les catégories disponibles
  selectedFiles: File[] = []; // Stocke les fichiers d'images sélectionnés
  apiUrl = environment.apiUrl; // URL de l'API depuis l'environnement
  conditionsAccepted = false;

  constructor(
    private habitatService: HabitatService,
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data; // Assurez-vous que les données correspondent au type Category[]
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  // Méthode appelée lors de la sélection des fichiers
  onFileSelected(event: any): void {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files); // Convertit les fichiers en tableau
      console.log('Fichiers sélectionnés :', this.selectedFiles);
    }
  }

  // Méthode pour uploader les images
  uploadImages(habitatId: number): void {
    const formData = new FormData();

    // Ajout des fichiers d'images
    this.selectedFiles.forEach((file: File) => {
      formData.append('images[]', file, file.name);
    });

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .post(`${this.apiUrl}/upload-images`, formData, { headers })
      .subscribe(
        (response) => {
          console.log('Images uploadées avec succès', response);
        },
        (error: HttpErrorResponse) => {
          console.error("Erreur lors de l'upload des images", error);
        }
      );
  }

  // Soumettre le formulaire pour créer l'habitat
  onSubmit(): void {
    // Préparer les données pour l'habitat
    const habitatData = {
      title: this.habitat.title,
      description: this.habitat.description,
      slug: this.habitat.slug,
      location: this.habitat.location,
      city: this.habitat.city,
      country: this.habitat.country,
      pricePerNight: this.habitat.pricePerNight,
      maxGuests: this.habitat.maxGuests,
      amenities: Array.isArray(this.habitat.amenities)
        ? this.habitat.amenities
        : [this.habitat.amenities],
      availability: Array.isArray(this.habitat.availability)
        ? this.habitat.availability
        : [this.habitat.availability],
      category:
        typeof this.habitat.category === 'string'
          ? this.habitat.category
          : (this.habitat.category as Category)?.id?.toString(), // Convertit en chaîne
      startDate: this.habitat.startDate,
      endDate: this.habitat.endDate,
      images: [],
    };

    this.habitatService.createHabitat(habitatData).subscribe(
      (response) => {
        console.log('Habitat créé avec succès', response);
        this.showPopup = true; // Afficher le popup
        const habitatId = response.id;

        // Vérifier si habitatId est défini
        if (habitatId !== undefined) {
          this.uploadImages(habitatId);
        } else {
          console.error(
            "Erreur : ID de l'habitat manquant pour l'upload des images."
          );
        }
      },
      (error: HttpErrorResponse) => {
        console.error("Erreur lors de l'ajout de l'habitat", error);
      }
    );
  }

  // Fermer le popup
  closePopup(): void {
    this.showPopup = false;
  }
}
