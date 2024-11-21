import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StripeCheckoutComponent } from './stripe-checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('StripeCheckoutComponent', () => {
  let component: StripeCheckoutComponent;
  let fixture: ComponentFixture<StripeCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StripeCheckoutComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ amount: 100, habitatName: 'Test Habitat' }), // Mock query parameters
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StripeCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct query params', () => {
    expect(component.amount).toBe(100); // Verify amount from query params
    expect(component.habitatName).toBe('Test Habitat'); // Verify habitatName from query params
  });
});
