import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ReservationFormComponent } from './reservation-form.component';
import { ReservationService } from '../../../../services/reservation.service';
import { UserService } from '../../../../services/user.service';
import { HabitatService } from '../../../../services/habitat.service';
import { StatusService } from '../../../../services/status.service';
import { ActivatedRoute } from '@angular/router';

describe('ReservationFormComponent', () => {
  let component: ReservationFormComponent;
  let fixture: ComponentFixture<ReservationFormComponent>;
  let mockReservationService: jasmine.SpyObj<ReservationService>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;
  let mockStatusService: jasmine.SpyObj<StatusService>;

  const mockUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123456789',
      roles: ['USER'],
      isActive: true,
    },
  ];

  const mockHabitats = [
    {
      id: 1,
      title: 'Habitat 1',
      description: 'A cozy apartment',
      slug: 'habitat-1',
      location: 'Paris, France',
      city: 'Paris',
      country: 'France',
      pricePerNight: 100,
      maxGuests: 4,
      amenities: ['Wi-Fi', 'Air Conditioning'],
      availability: ['2024-12-01', '2024-12-10'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      images: [{ url: '/path/to/image.jpg' }],
      category: 'Apartment',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-10'),
    },
  ];

  const mockStatuses = [
    {
      id: 1,
      title: 'Pending',
      slug: 'pending',
    },
  ];

  const mockReservation = {
    id: 1,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-01-10'),
    totalPrice: 1000,
    user: mockUsers[0],
    habitat: mockHabitats[0],
    status: mockStatuses[0],
  };

  beforeEach(async () => {
    mockReservationService = jasmine.createSpyObj('ReservationService', [
      'getReservation',
      'createReservation',
      'updateReservation',
    ]);
    mockUserService = jasmine.createSpyObj('UserService', ['getUsers']);
    mockHabitatService = jasmine.createSpyObj('HabitatService', ['getHabitats']);
    mockStatusService = jasmine.createSpyObj('StatusService', ['getStatuses']);

    await TestBed.configureTestingModule({
      declarations: [ReservationFormComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: ReservationService, useValue: mockReservationService },
        { provide: UserService, useValue: mockUserService },
        { provide: HabitatService, useValue: mockHabitatService },
        { provide: StatusService, useValue: mockStatusService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }, // Simuler un ID pour l'édition
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationFormComponent);
    component = fixture.componentInstance;

    mockUserService.getUsers.and.returnValue(of(mockUsers));
    mockHabitatService.getHabitats.and.returnValue(of(mockHabitats));
    mockStatusService.getStatuses.and.returnValue(of(mockStatuses));
    mockReservationService.getReservation.and.returnValue(of(mockReservation));
    mockReservationService.createReservation.and.returnValue(of(mockReservation));
    mockReservationService.updateReservation.and.returnValue(of(mockReservation));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load related data (users, habitats, statuses) on init', () => {
    expect(component.users.length).toBe(1);
    expect(component.habitats.length).toBe(1);
    expect(component.statuses.length).toBe(1);
    expect(mockUserService.getUsers).toHaveBeenCalled();
    expect(mockHabitatService.getHabitats).toHaveBeenCalled();
    expect(mockStatusService.getStatuses).toHaveBeenCalled();
  });

  it('should load reservation for editing if ID is present', () => {
    expect(component.isEditMode).toBeTrue();
    expect(component.reservation.id).toBe(1);
    expect(component.reservation.user.firstName).toBe('John');
    expect(component.reservation.habitat.title).toBe('Habitat 1');
    expect(mockReservationService.getReservation).toHaveBeenCalledWith(1);
  });

  it('should call createReservation when saveReservation is called in create mode', () => {
    component.isEditMode = false;
    component.reservation = {
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-10'),
      totalPrice: 500,
      user: mockReservation.user,
      habitat: mockReservation.habitat,
      status: mockReservation.status,
    };

    component.saveReservation();

    expect(mockReservationService.createReservation).toHaveBeenCalledWith(component.reservation);
  });

  it('should call updateReservation when saveReservation is called in edit mode', () => {
    component.isEditMode = true;
    component.reservation = mockReservation;

    component.saveReservation();

    expect(mockReservationService.updateReservation).toHaveBeenCalledWith(
      mockReservation.id,
      mockReservation
    );
  });
});
