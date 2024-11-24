import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppartListComponent } from './appart-list.component';
import { HabitatService } from '../../../../services/habitat.service';
import { of } from 'rxjs';
import { Habitat } from '../../../../models/habitat.model';

describe('AppartListComponent', () => {
  let component: AppartListComponent;
  let fixture: ComponentFixture<AppartListComponent>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;

  const mockHabitats: Habitat[] = [
    {
      id: 1,
      title: 'Habitat 1',
      description: 'Une belle maison à Paris',
      slug: 'habitat-1',
      location: '48.8566,2.3522',
      city: 'Paris',
      country: 'France',
      pricePerNight: 150,
      maxGuests: 4,
      amenities: ['Wi-Fi', 'Climatisation'],
      availability: ['2024-12-01T00:00:00Z', '2024-12-15T00:00:00Z'],
      category: 'Appartement',
      images: [{ url: '/images/1.jpg' }],
      startDate: new Date('2024-12-01T00:00:00Z'),
      endDate: new Date('2024-12-15T00:00:00Z'),
      createdAt: '2024-11-01T00:00:00Z',
      updatedAt: '2024-11-10T00:00:00Z',
    },
  ];

  beforeEach(async () => {
    mockHabitatService = jasmine.createSpyObj('HabitatService', ['getHabitats']);

    await TestBed.configureTestingModule({
      declarations: [AppartListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: HabitatService, useValue: mockHabitatService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppartListComponent);
    component = fixture.componentInstance;

    // Mock les méthodes du service
    mockHabitatService.getHabitats.and.returnValue(of(mockHabitats));

    // Mock pour les requêtes d'images
    spyOn(component['http'], 'get').and.returnValue(
      of({ url: 'https://example.com/image.jpg' })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display habitats on init', () => {
    component.ngOnInit(); // Appelle explicitement ngOnInit
    fixture.detectChanges();

    // Vérifie que le service a été appelé
    expect(mockHabitatService.getHabitats).toHaveBeenCalled();

    // Vérifie que les habitats ont été assignés
    expect(component.habitats.length).toBe(1);
    expect(component.habitats[0].title).toBe('Habitat 1');

    // Vérifie que les habitats filtrés correspondent
    expect(component.filteredHabitats.length).toBe(1);
    expect(component.filteredHabitats[0].title).toBe('Habitat 1');
  });

  it('should filter habitats based on search term', () => {
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

  it('should handle missing habitat ID in viewHabitat', () => {
    const consoleSpy = spyOn(console, 'error');
    component.viewHabitat(undefined);
    expect(consoleSpy).toHaveBeenCalledWith("ID de l'habitat est manquant");
  });
});
