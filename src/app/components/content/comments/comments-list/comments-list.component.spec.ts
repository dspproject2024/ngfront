import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsListComponent } from './comments-list.component';
import { HabitatService } from '../../../../services/habitat.service';
import { AvisService } from '../../../../services/avis.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Habitat } from '../../../../models/habitat.model';
import { Avis } from '../../../../models/avis.model';

describe('CommentsListComponent (Basic Tests)', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;
  let mockAvisService: jasmine.SpyObj<AvisService>;

  const mockHabitat: Habitat = {
    id: 1,
    title: 'Mock Habitat',
    description: 'A beautiful place',
    slug: 'mock-habitat',
    location: 'Mock City',
    city: 'Mock City',
    country: 'Mock Country',
    pricePerNight: 100,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen'],
    availability: ['2024-01-01', '2024-01-02'],
    category: 'Vacation',
    startDate: new Date(),
    endDate: new Date(),
    images: [],
    createdAt: '',
    updatedAt: '',
    owner: { id: 1, username: 'Owner' },
  };

  const mockComments: Avis[] = [
    {
      id: 1,
      comment: 'Great place!',
      rating: 5,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      user: { id: 1, username: 'User1', avatarUrl: 'avatar1.png' },
      habitat: { id: 1, title: 'Mock Habitat' },
    },
  ];

  beforeEach(async () => {
    mockHabitatService = jasmine.createSpyObj('HabitatService', ['getHabitats', 'getHabitatById']);
    mockAvisService = jasmine.createSpyObj('AvisService', ['getCommentsByHabitat']);

    await TestBed.configureTestingModule({
      declarations: [CommentsListComponent],
      imports: [FormsModule],
      providers: [
        { provide: HabitatService, useValue: mockHabitatService },
        { provide: AvisService, useValue: mockAvisService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch habitat and comments on init', () => {
    // Simule la réponse correcte des services
    mockHabitatService.getHabitats.and.returnValue(of( [mockHabitat]));
    mockAvisService.getCommentsByHabitat.and.returnValue(of(mockComments ));

    // Déclenche le cycle de détection des changements
    fixture.detectChanges();

    // Vérifie que les services ont été appelés
    expect(mockHabitatService.getHabitats).toHaveBeenCalled();
    expect(mockAvisService.getCommentsByHabitat).toHaveBeenCalledWith(1);

    // Vérifie que les données sont bien assignées
    expect(component.habitat).toEqual(mockHabitat);
    expect(component.comments.length).toBe(mockComments.length);
  });

  it('should display "Aucun commentaire pour l\'instant." when there are no comments', () => {
    // Simule l'absence de commentaires
    component.comments = [];
    fixture.detectChanges();
  
    // Cible l'élément HTML via l'attribut data-testid
    const noCommentsMessage = fixture.nativeElement.querySelector('[data-testid="no-comments-message"]')?.textContent;
  
    // Vérifie que le texte affiché correspond
    expect(noCommentsMessage).toContain('Aucun commentaire pour l\'instant.');
  });

  it('should handle submitting a new comment', () => {
    component.habitat = mockHabitat;
    component.newComment = 'This is a new comment';
    component.onSubmitComment();

    // Vérifie que le commentaire est ajouté
    expect(component.comments.length).toBe(1);
    expect(component.comments[0].comment).toBe('This is a new comment');
    expect(component.newComment).toBe(''); // Vérifie que le champ est réinitialisé
  });

  it('should render the comment form and list correctly', () => {
    component.comments = mockComments;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy(); // Vérifie la présence du formulaire
    expect(compiled.querySelectorAll('.flex-col').length).toBe(1); // Vérifie qu'un commentaire est affiché
  });
});
