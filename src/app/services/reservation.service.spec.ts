import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ReservationService } from './reservation.service';
import { Reservation } from '../models/reservation.model';
import { environment } from '../../environments/environment';

describe('ReservationService', () => {
  let service: ReservationService;
  let httpMock: HttpTestingController;

  const mockReservation: Reservation = {
    id: 1,
    startDate: '2023-01-01',
    endDate: '2023-01-05',
    totalPrice: 500,
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      roles: ['ROLE_USER'],
      isActive: true,
    },
    habitat: {
      id: 1,
      title: 'Cozy Apartment',
      description: 'A beautiful apartment',
      slug: 'cozy-apartment',
      location: '123 Main St, Paris',
      city: 'Paris',
      country: 'France',
      pricePerNight: 100,
      maxGuests: 2,
      amenities: ['WiFi', 'Kitchen'],
      availability: ['2023-01-01', '2023-01-02', '2023-01-03'],
      createdAt: '2022-12-01T10:00:00Z',
      updatedAt: '2022-12-15T10:00:00Z',
      owner: {
        id: 1,
        name: 'Owner Name',
      },
      category: 'Apartment',
      images: [
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image2.jpg' },
      ],
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-01-05'),
    },
    status: {
      id: 1,
      title: 'Confirmed',
      description: 'Reservation confirmed successfully',
      slug: 'confirmed',
      createdAt: '2023-01-01T10:00:00Z',
      updatedAt: '2023-01-02T10:00:00Z',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservationService],
    });
    service = TestBed.inject(ReservationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all reservations', () => {
    service.getReservations().subscribe((reservations) => {
      expect(reservations.length).toBe(1);
      expect(reservations[0]).toEqual(mockReservation);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/reservations`);
    expect(req.request.method).toBe('GET');
    req.flush([mockReservation]);
  });

  it('should fetch a reservation by ID', () => {
    service.getReservation(1).subscribe((reservation) => {
      expect(reservation).toEqual(mockReservation);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/reservations/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockReservation);
  });

  it('should create a new reservation', () => {
    const newReservation: Reservation = {
      ...mockReservation,
      id: undefined,
      totalPrice: 300,
    };

    service.createReservation(newReservation).subscribe((reservation) => {
      expect(reservation).toEqual(mockReservation);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/reservations`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newReservation);
    req.flush(mockReservation);
  });

  it('should update an existing reservation', () => {
    const updatedReservation: Reservation = {
      ...mockReservation,
      totalPrice: 600,
    };

    service
      .updateReservation(1, updatedReservation)
      .subscribe((reservation) => {
        expect(reservation).toEqual(updatedReservation);
      });

    const req = httpMock.expectOne(`${environment.apiUrl}/reservations/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedReservation);
    req.flush(updatedReservation);
  });

  it('should delete a reservation', () => {
    service.deleteReservation(1).subscribe((response) => {
      expect(response).toBeNull(); // Expect null for successful deletion
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/reservations/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Use null instead of undefined
  });
});
