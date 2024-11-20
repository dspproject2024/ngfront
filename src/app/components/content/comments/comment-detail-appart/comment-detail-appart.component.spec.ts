import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CommentDetailAppartComponent } from './comment-detail-appart.component';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';

describe('CommentDetailAppartComponent', () => {
  let component: CommentDetailAppartComponent;
  let fixture: ComponentFixture<CommentDetailAppartComponent>;
  let habitatService: jasmine.SpyObj<HabitatService>;

  const mockHabitat: Habitat = {
    id: 1,
    title: 'Cozy Apartment',
    description: 'A nice and cozy apartment in the city.',
    slug: 'cozy-apartment',
    location: '123 Main St',
    city: 'Paris',
    country: 'France',
    pricePerNight: 120,
    maxGuests: 4,
    amenities: ['WiFi', 'Air Conditioning'],
    availability: ['2023-01-01', '2023-01-02'],
    images: [{ url: 'https://example.com/image.jpg' }],
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-02T00:00:00Z',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-01-05'),
    category: 'Apartment',
    owner: { id: 1, name: 'Owner Name' },
  };

  beforeEach(async () => {
    const habitatServiceSpy = jasmine.createSpyObj('HabitatService', [
      'getHabitatById',
    ]);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CommentDetailAppartComponent],
      providers: [
        { provide: HabitatService, useValue: habitatServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    }).compileComponents();

    habitatService = TestBed.inject(
      HabitatService
    ) as jasmine.SpyObj<HabitatService>;
    habitatService.getHabitatById.and.returnValue(of(mockHabitat));

    fixture = TestBed.createComponent(CommentDetailAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch habitat details on init', () => {
    expect(habitatService.getHabitatById).toHaveBeenCalledWith(1);
    expect(component.habitat).toEqual(mockHabitat);
  });

  it('should display habitat details in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Cozy Apartment'
    );
    expect(compiled.querySelector('p')?.textContent).toContain(
      'A nice and cozy apartment in the city.'
    );
    expect(compiled.querySelector('span.font-bold')?.textContent).toContain(
      '120€'
    );
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe(
      'https://example.com/image.jpg'
    );
  });
});
