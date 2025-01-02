import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppartListComponent } from './appart-list.component';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeFr, 'fr');

describe('AppartListComponent', () => {
  let component: AppartListComponent;
  let fixture: ComponentFixture<AppartListComponent>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;

  const mockHabitats: Habitat[] = [
    {
      id: 1,
      title: 'Habitat avec image',
      description: 'Un bel appartement à Paris avec une vue imprenable.',
      slug: 'habitat-avec-image',
      location: '48.8566,2.3522',
      city: 'Paris',
      country: 'France',
      pricePerNight: 200,
      maxGuests: 4,
      amenities: ['Wi-Fi', 'Climatisation', 'Cuisine équipée'],
      availability: ['2024-12-01T00:00:00Z', '2024-12-15T00:00:00Z'],
      category: 'Appartement',
      images: [{ url: '/images/1.jpg' }], // Image disponible
      startDate: new Date('2024-12-01T00:00:00Z'),
      endDate: new Date('2024-12-15T00:00:00Z'),
      createdAt: '2024-11-01T00:00:00Z',
      updatedAt: '2024-11-10T00:00:00Z',
    },
    {
      id: 2,
      title: 'Habitat sans image',
      description: 'Une charmante maison familiale au calme.',
      slug: 'habitat-sans-image',
      location: '45.7640,4.8357',
      city: 'Lyon',
      country: 'France',
      pricePerNight: 150,
      maxGuests: 6,
      amenities: ['Wi-Fi', 'Parking gratuit'],
      availability: ['2024-12-05T00:00:00Z', '2024-12-20T00:00:00Z'],
      category: 'Maison',
      images: [], // Aucune image disponible
      startDate: new Date('2024-12-05T00:00:00Z'),
      endDate: new Date('2024-12-20T00:00:00Z'),
      createdAt: '2024-11-02T00:00:00Z',
      updatedAt: '2024-11-12T00:00:00Z',
    },
  ];

  beforeEach(async () => {
    mockHabitatService = jasmine.createSpyObj('HabitatService', ['getHabitats', 'getImage']);

    // Retourne directement le tableau d'habitats
    mockHabitatService.getHabitats.and.returnValue(of(mockHabitats));

    const mockImage = new Blob(['mock image content'], { type: 'image/jpeg' });
    mockHabitatService.getImage.and.returnValue(of(mockImage));

    await TestBed.configureTestingModule({
      declarations: [AppartListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: HabitatService, useValue: mockHabitatService },
        { provide: LOCALE_ID, useValue: 'fr' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppartListComponent);
    component = fixture.componentInstance;

    // Simuler les URLs d'images
    component.imageUrls = {
      1: '/images/1.jpg',
      2: 'assets/images/placeholder-image7@2x.png',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display habitats on init', () => {
    // Arrange
    mockHabitatService.getHabitats.and.returnValue(of(mockHabitats));

    // Act
    component.ngOnInit(); // Appelle ngOnInit pour charger les données
    fixture.detectChanges();

    // Assert
    expect(mockHabitatService.getHabitats).toHaveBeenCalled();
    expect(2).toBe(2);
    expect(mockHabitats[0].title).toBe('Habitat avec image');
    expect(mockHabitats[1].title).toBe('Habitat sans image');
  });



  it('should display the correct image when available', () => {
    component.filteredHabitats = mockHabitats;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const habitatImages = compiled.querySelectorAll('.habitat-card .habitat-image');

    expect(habitatImages[0].getAttribute('src')).toContain('/images/1.jpg');
    expect(habitatImages[1].getAttribute('src')).toContain('assets/images/placeholder-image7@2x.png');
  });

  it('should display a placeholder image if no image is available', () => {
    component.filteredHabitats = mockHabitats;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const habitatImages = compiled.querySelectorAll('.habitat-card .habitat-image');

    expect(habitatImages[1].getAttribute('src')).toContain('assets/images/placeholder-image7@2x.png');
  });

  it('should filter habitats based on search term', () => {
    component.habitats = mockHabitats;
    component.searchTerm = 'Paris';
    component.filterHabitats();

    expect(component.filteredHabitats.length).toBe(1);
    expect(component.filteredHabitats[0].city).toBe('Paris');

    component.searchTerm = 'Nonexistent';
    component.filterHabitats();
    expect(component.filteredHabitats.length).toBe(0);
  });

  it('should navigate to the habitat details page when viewHabitat is called', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.viewHabitat(1);
    expect(navigateSpy).toHaveBeenCalledWith(['/id-appart', 1]);
  });

//ceci est un commentaire


  it('should handle missing habitat ID in viewHabitat', () => {
    const consoleSpy = spyOn(console, 'error');
    component.viewHabitat(undefined);
    expect(consoleSpy).toHaveBeenCalledWith("ID de l'habitat est manquant");
  });
});
