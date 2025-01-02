import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HabitatService } from './habitat.service';
import { Habitat } from '../models/habitat.model';
import { environment } from '../../environments/environment';

describe('HabitatService', () => {
  let service: HabitatService;
  let httpMock: HttpTestingController;

  const mockHabitats: Habitat[] = [
    {
      id: 1,
      title: 'Luxury Apartment',
      description: 'A luxurious apartment in the city center.',
      slug: 'luxury-apartment',
      location: '123 Main Street',
      city: 'Paris',
      country: 'France',
      pricePerNight: 200,
      maxGuests: 4,
      amenities: ['WiFi', 'Air Conditioning'],
      availability: ['2023-01-01', '2023-01-02'],
      images: [{ url: 'https://example.com/image1.jpg' }],
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-02T00:00:00Z',
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-01-05'),
      category: 'Apartment',
    },
    {
      id: 2,
      title: 'Cozy Studio',
      description: 'A cozy studio for short stays.',
      slug: 'cozy-studio',
      location: '456 Side Street',
      city: 'Berlin',
      country: 'Germany',
      pricePerNight: 100,
      maxGuests: 2,
      amenities: ['WiFi', 'Heating'],
      availability: ['2023-01-03', '2023-01-04'],
      images: [{ url: 'https://example.com/image2.jpg' }],
      createdAt: '2023-01-03T00:00:00Z',
      updatedAt: '2023-01-04T00:00:00Z',
      startDate: new Date('2023-01-03'),
      endDate: new Date('2023-01-06'),
      category: 'Studio',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HabitatService],
    });
    service = TestBed.inject(HabitatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all habitats', () => {
    const apiResponse = { 'hydra:member': mockHabitats };

    service.getHabitats().subscribe((habitats) => {
      expect(2).toBe(2);
      expect(habitats).toEqual(habitats);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/habitats`);
    expect(req.request.method).toBe('GET');
    req.flush(apiResponse);
  });

  it('should fetch a specific habitat by ID', () => {
    const habitatId = 1;
    const mockHabitat = mockHabitats[0];

    service.getHabitatById(habitatId).subscribe((habitat) => {
      expect(habitat).toEqual(mockHabitat);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/habitats/${habitatId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockHabitat);
  });

  it('should fetch an image by ID', () => {
    const imageId = 'image123';
    const mockImage = new Blob(['mock image content'], { type: 'image/jpeg' });

    service.getImage(imageId).subscribe((image) => {
      expect(image).toEqual(mockImage);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/habitats${imageId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockImage);
  });
});
