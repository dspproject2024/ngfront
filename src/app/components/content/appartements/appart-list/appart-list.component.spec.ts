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
      availability: ['2024-12-01', '2024-12-15'],
      category: 'Appartement',
      images: [{ url: '/images/1.jpg' }],
      startDate: new Date('2024-12-01'),
      endDate: new Date('2024-12-15'),
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

    mockHabitatService.getHabitats.and.returnValue(of(mockHabitats)); // Simule un retour valide
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display habitats on init', () => {
    expect(mockHabitatService.getHabitats).toHaveBeenCalled();
    expect(component.habitats.length).toBe(1);
    expect(component.habitats[0].title).toBe('Habitat 1');
    expect(component.filteredHabitats.length).toBe(1); // Les habitats affichés doivent être initialement filtrés
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

  it('should handle missing habitat ID in viewHabitat', () => {
    const consoleSpy = spyOn(console, 'error');
    component.viewHabitat(undefined);
    expect(consoleSpy).toHaveBeenCalledWith('ID de l\'habitat est manquant');
  });

  it('should navigate to the habitat details page when viewHabitat is called', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.viewHabitat(1);
    expect(navigateSpy).toHaveBeenCalledWith(['/id-appart', 1]);
  });
});
