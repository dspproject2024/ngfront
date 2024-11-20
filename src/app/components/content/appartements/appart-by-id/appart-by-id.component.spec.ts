import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppartByIdComponent } from './appart-by-id.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HabitatService } from '../../../../services/habitat.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppartByIdComponent', () => {
  let component: AppartByIdComponent;
  let fixture: ComponentFixture<AppartByIdComponent>;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Use HttpClientTestingModule for real HTTP calls
      declarations: [AppartByIdComponent],
      providers: [
        HabitatService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '1' : null), // Simulate route param id = 1
              },
            },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements in the template
    }).compileComponents();

    fixture = TestBed.createComponent(AppartByIdComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding HTTP requests
  });

  it('should create', () => {
    fixture.detectChanges();

    const habitatReq = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats/1'
    );
    habitatReq.flush({
      id: 1,
      title: 'Test Habitat',
      description: 'A beautiful place',
      pricePerNight: 100,
      maxGuests: 4,
      amenities: ['WiFi', 'Pool'],
      startDate: '2023-01-01',
      endDate: '2023-01-05',
      city: 'Test City',
      country: 'Test Country',
      images: ['/image1', '/image2'],
    });

    const imageReq1 = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/image1'
    );
    imageReq1.flush({ url: 'https://example.com/image1.jpg' });

    const imageReq2 = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/image2'
    );
    imageReq2.flush({ url: 'https://example.com/image2.jpg' });

    expect(component).toBeTruthy();
  });

  it('should fetch habitat details on init', () => {
    fixture.detectChanges();

    const habitatReq = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats/1'
    );
    expect(habitatReq.request.method).toBe('GET');

    habitatReq.flush({
      id: 1,
      title: 'Test Habitat',
      description: 'A beautiful place',
      pricePerNight: 100,
      maxGuests: 4,
      amenities: ['WiFi', 'Pool'],
      startDate: '2023-01-01',
      endDate: '2023-01-05',
      city: 'Test City',
      country: 'Test Country',
      images: ['/image1', '/image2'],
    });

    const imageReq1 = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/image1'
    );
    imageReq1.flush({ url: 'https://example.com/image1.jpg' });

    const imageReq2 = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/image2'
    );
    imageReq2.flush({ url: 'https://example.com/image2.jpg' });

    expect(component.habitat.title).toBe('Test Habitat');
    expect(component.images.length).toBe(2);
  });

  it('should handle errors gracefully when fetching habitat details', () => {
    fixture.detectChanges();

    const habitatReq = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/habitats/1'
    );
    habitatReq.error(new ErrorEvent('Network error'));

    expect(component.habitat).toBeUndefined();
  });
});
