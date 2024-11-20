import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationDetailsComponent } from '../reservation-details/reservation-details.component';
import { ReservationService } from '../../../../services/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Reservation } from '../../../../models/reservation.model';

describe('ReservationDetailsComponent', () => {
  let component: ReservationDetailsComponent;
  let fixture: ComponentFixture<ReservationDetailsComponent>;
  let mockReservationService: jasmine.SpyObj<ReservationService>;

  const mockReservation: Reservation = {
    id: 1,
    startDate: new Date('2024-11-01'),
    endDate: new Date('2024-11-05'),
    totalPrice: 200,
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
      title: 'Beautiful Villa',
      description: 'A lovely villa for family vacations',
      slug: 'beautiful-villa',
      location: '123 Sunset Blvd',
      city: 'Los Angeles',
      country: 'USA',
      pricePerNight: 50,
      maxGuests: 4,
      amenities: ['Pool', 'WiFi'],
      availability: ['2024-11-01', '2024-11-05'],
      images: [{ url: 'https://example.com/image.jpg' }],
      startDate: new Date('2024-11-01'),
      endDate: new Date('2024-11-05'),
      category: 'Luxury',
    },
    status: {
      id: 1,
      title: 'Confirmed',
      slug: 'confirmed',
      createdAt: new Date('2024-10-20').toISOString(),
      updatedAt: new Date('2024-10-21').toISOString(),
    },
  };

  beforeEach(async () => {
    // Mocking the ReservationService
    mockReservationService = jasmine.createSpyObj('ReservationService', [
      'getReservation',
    ]);
    mockReservationService.getReservation.and.returnValue(of(mockReservation));

    await TestBed.configureTestingModule({
      declarations: [ReservationDetailsComponent],
      providers: [
        { provide: ReservationService, useValue: mockReservationService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }, // Mock route with ID = 1
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the reservation on init', () => {
    expect(mockReservationService.getReservation).toHaveBeenCalledWith(1);
    expect(component.reservation).toEqual(mockReservation);
  });
});
