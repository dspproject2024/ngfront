
import { Component, OnInit } from '@angular/core';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-list.component.html',
  styleUrl: './appart-list.component.css'
})
export class AppartListComponent implements OnInit {
  habitats: Habitat[] = []; // All habitats
  filteredThreeHabitats: Habitat[] = []; // Store the first three habitats

  constructor(private habitatService: HabitatService,private router: Router,) {}

  ngOnInit(): void {
    this.fetchHabitats();
  }

  // Fetch all habitats
  fetchHabitats(): void {
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        // Assuming the API returns habitats in 'hydra:member'
        this.habitats = data['hydra:member'] || [];
      //  this.filteredThreeHabitats = this.habitats.slice(0, 3); // Filter the first three habitats after fetching
      },
      (error) => {
        console.error('Error fetching habitats:', error);
      }
    );
  }

  viewHabitat(habitatId: number): void {

    this.router.navigate(['/id-appart',habitatId]);
  }

  viewComments(habitatId: number): void {

    this.router.navigate(['/comments',habitatId]);
  }
}
