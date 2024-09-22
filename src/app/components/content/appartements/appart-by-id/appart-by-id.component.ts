import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';

@Component({
  selector: 'app-appart-by-id',
  templateUrl: './appart-by-id.component.html',
  styleUrls: ['./appart-by-id.component.css']
})
export class AppartByIdComponent implements OnInit {
  habitat: Habitat | null = null;
  currentImageIndex: number = 0;  // Index de l'image actuelle

  constructor(private habitatService: HabitatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getByIdHabitat();
  }

  getByIdHabitat(): void {
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));

    this.habitatService.getHabitatById(habitatId).subscribe(
      (data: Habitat) => {
        this.habitat = data;
        console.log('Images récupérées:', this.habitat?.images);  // Affiche la liste des images récupérées
        if (!this.habitat?.images || this.habitat.images.length === 0) {
          console.warn('Aucune image récupérée ou images mal formées.');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'habitat:', error);
      }
    );
  }

  nextImage(): void {
    if (this.habitat?.images && this.habitat.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.habitat.images.length;
    }
    console.log('Image suivante, index:', this.currentImageIndex);
  }

  previousImage(): void {
    if (this.habitat?.images && this.habitat.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.habitat.images.length) % this.habitat.images.length;
    }
    console.log('Image précédente, index:', this.currentImageIndex);
  }
}
