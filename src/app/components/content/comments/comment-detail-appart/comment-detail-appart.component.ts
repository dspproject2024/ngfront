import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitatService } from '../../../../services/habitat.service'; // Ensure correct path
import { Habitat } from '../../../../models/habitat.model'; // Ensure correct path

@Component({
  selector: 'app-comment-detail-appart',
  templateUrl: './comment-detail-appart.component.html',
  styleUrls: ['./comment-detail-appart.component.css'], // Corrected styleUrls key
})
export class CommentDetailAppartComponent implements OnInit {
  habitat: Habitat | null = null; // To store the fetched habitat

  constructor(
    private habitatService: HabitatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getByIdHabitat();
  }

  getByIdHabitat(): void {
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(habitatId)) {
      this.habitatService.getHabitatById(habitatId).subscribe(
        (data: Habitat) => {
          this.habitat = data;
        },
        (error) => {
          console.error('Error fetching habitat:', error);
        }
      );
    } else {
      console.error('Invalid habitat ID');
    }
  }
}
