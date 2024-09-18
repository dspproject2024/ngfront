// src/app/components/comments-list/comments-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitat } from '../../../../models/habitat.model'; // Assuming Habitat model is defined
import { HabitatService } from '../../../../services/habitat.service';
import { AvisService } from '../../../../services/avis.service';
import { Avis } from '../../../../models/avis.model'; // Import Avis model

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  habitat: Habitat | null = null;
  comments: Avis[] = [];

  constructor(
    private habitatService: HabitatService,
    private avisService: AvisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get habitat ID from route
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));



    // Fetch comments for this habitat
    this.avisService.getCommentsByHabitat(habitatId).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
