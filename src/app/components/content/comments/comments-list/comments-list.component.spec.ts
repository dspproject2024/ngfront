import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsListComponent } from './comments-list.component';
import { HabitatService } from '../../../../services/habitat.service';
import { AvisService } from '../../../../services/avis.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Avis } from '../../../../models/avis.model';
import { Habitat } from '../../../../models/habitat.model';

describe('CommentsListComponent', () => {
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
    createdAt: "",
    updatedAt: "",
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch habitat and comments on init', () => {
    // Simule la réponse du service pour les habitats
    mockHabitatService.getHabitats.and.returnValue(of([{ id: 1, title: 'Mock Habitat' } as Habitat]));
    mockAvisService.getCommentsByHabitat.and.returnValue(of(mockComments));

    fixture.detectChanges();

    expect(mockHabitatService.getHabitats).toHaveBeenCalled();
    expect(mockAvisService.getCommentsByHabitat).toHaveBeenCalledWith(1);
    expect(component.habitat?.title).toBe('Mock Habitat');
    expect(component.comments.length).toBe(1);
  });

  it('should handle submitting a new comment', () => {
    component.habitat = mockHabitat;
    component.newComment = 'This is a new comment';
    component.onSubmitComment();

    expect(component.comments.length).toBe(2);
    expect(component.comments[1].comment).toBe('This is a new comment');
    expect(component.newComment).toBe('');
  });

  it('should render the comment form and list correctly', () => {
    component.comments = mockComments;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelectorAll('.flex-col').length).toBe(1);
  });

  it('should display no comments message if comments list is empty', () => {
    component.comments = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-center')?.textContent).toContain('No comments yet.');
  });
});
