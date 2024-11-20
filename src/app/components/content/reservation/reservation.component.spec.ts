import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationComponent } from './reservation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HabitatService } from '../../../services/habitat.service';
import { of, throwError } from 'rxjs';
import { BrowserModule, By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Reservation } from '../../../models/reservation.model';
import { Habitat } from '../../../models/habitat.model';
import { User } from '../../../models/user.model';
import { Status } from '../../../models/status.model';
import { AppRoutingModule } from '../../../app-routing.module';
import { FormsModule } from '@angular/forms';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;
  let habitatService: HabitatService;
  let http: HttpClient;
  let router: Router;

  const mockStatus: Status = {
    id: 1,
    title: 'Reserved',
    description: 'Reservation confirmed',
    slug: 'reserved',
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-10-10T00:00:00Z',
  };

  const mockUser: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    roles: ['ROLE_USER'],
    isActive: true,
  };

  const mockHabitat: Habitat = {
    id: 1,
    title: 'Test Habitat',
    description: 'A beautiful place.',
    slug: 'test-habitat',
    location: 'Forest Retreat',
    city: 'Natureville',
    country: 'Wonderland',
    pricePerNight: 100,
    maxGuests: 4,
    amenities: ['WiFi', 'Pool'],
    availability: ['2023-11-01', '2023-11-30'],
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-10-10T00:00:00Z',
    owner: mockUser,
    category: 'Nature',
    images: [{ url: '/images/habitat1.jpg' }, { url: '/images/habitat2.jpg' }],
    startDate: new Date('2023-11-01'),
    endDate: new Date('2023-11-30'),
  };

  const mockReservation: Reservation = {
    startDate: '2023-11-10',
    endDate: '2023-11-15',
    totalPrice: 500,
    user: mockUser,
    habitat: mockHabitat,
    status: mockStatus,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule, // Ajoutez FormsModule ici
      ],
      declarations: [ReservationComponent],
      providers: [HabitatService],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    habitatService = TestBed.inject(HabitatService);
    http = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);

    spyOn(habitatService, 'getHabitatById').and.returnValue(of(mockHabitat));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch habitat details on initialization', () => {
  //  spyOn(TestBed.inject(ActivatedRoute).queryParams, 'subscribe').and.callFake(
  //    (callback) => callback({ habitatId: 1 })
  //  );

    component.ngOnInit();

    expect(habitatService.getHabitatById).toHaveBeenCalledWith(1);

    // Utiliser jasmine.objectContaining si certaines propriétés doivent être vérifiées
    expect(component.reservation.habitat).toEqual(
      jasmine.objectContaining(mockHabitat)
    );
  });

  it('should calculate the total price for the reservation', () => {
    component.habitat = mockHabitat;
    component.reservation.startDate = '2023-11-10';
    component.reservation.endDate = '2023-11-15';

    component.calculateTotalPrice();

    expect(component.reservation.totalPrice).toBe(500); // 5 nights * 100€ per night
  });

  it('should navigate to checkout after successful reservation', () => {
    spyOn(router, 'navigate');
    spyOn(http, 'post').and.returnValue(of({ id: 123 }));

    component.habitat = mockHabitat;
    component.reservation.startDate = '2023-11-10';
    component.reservation.endDate = '2023-11-15';

    component.makeReservation();

    expect(http.post).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/checkout'], {
      queryParams: {
        reservationId: 123,
        amount: 500,
        habitatName: 'Test Habitat',
      },
    });
  });

  it('should display error if reservation fails', () => {
    spyOn(http, 'post').and.returnValue(throwError('Reservation failed'));
    spyOn(window, 'alert');

    component.habitat = mockHabitat;
    component.reservation.startDate = '2023-11-10';
    component.reservation.endDate = '2023-11-15';

    component.makeReservation();

    expect(http.post).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Erreur lors de la réservation. Veuillez réessayer.'
    );
  });

  it('should render habitat details correctly', () => {
    component.habitat = mockHabitat;
    fixture.detectChanges();

    const title = fixture.debugElement.query(
      By.css('.heading12')
    ).nativeElement;
    const description = fixture.debugElement.query(
      By.css('.text24')
    ).nativeElement;

    expect(title.textContent).toContain('Test Habitat');
    expect(description.textContent).toContain('A beautiful place.');
  });

  it('should update current image index for carousel navigation', () => {
    component.images = mockHabitat.images.map(
      (img) => `http://localhost${img.url}`
    );
    component.currentImageIndex = 0;

    component.nextImage();
    expect(component.currentImageIndex).toBe(1);

    component.previousImage();
    expect(component.currentImageIndex).toBe(0);
  });
});
