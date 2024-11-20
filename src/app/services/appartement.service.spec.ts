import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppartementService } from './appartement.service';
import { Appartement } from '../models/appartement.model';

describe('AppartementService', () => {
  let service: AppartementService;
  let httpMock: HttpTestingController;

  const mockAppartements: Appartement[] = [
    {
      id: 1,
      title: 'Luxury Apartment',
      description: 'A luxurious apartment in the city center.',
      url: 'https://example.com/luxury-apartment',
      price: 150,
    },
    {
      id: 2,
      title: 'Cozy Studio',
      description: 'A cozy studio for short stays.',
      url: 'https://example.com/cozy-studio',
      price: 75,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppartementService],
    });
    service = TestBed.inject(AppartementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all apartments', () => {
    service.getAppartements().subscribe((appartements) => {
      expect(appartements.length).toBe(2);
      expect(appartements).toEqual(mockAppartements);
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockAppartements);
  });

  it('should handle errors gracefully', () => {
    service.getAppartements().subscribe({
      next: () => fail('Expected error, but got data'),
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats'
    );
    expect(req.request.method).toBe('GET');
    req.flush(null, { status: 500, statusText: 'Internal Server Error' }); // Use `null` for an empty response body
  });
});
