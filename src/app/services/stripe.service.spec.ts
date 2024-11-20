import { TestBed } from '@angular/core/testing';
import { StripeService } from './stripe.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('StripeService', () => {
  let service: StripeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule to provide HttpClient
      providers: [StripeService], // Provide the StripeService
    });

    service = TestBed.inject(StripeService); // Inject the StripeService
    httpMock = TestBed.inject(HttpTestingController); // Inject the HttpTestingController
  });

  afterEach(() => {
    httpMock.verify(); // Ensure there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verify that the service is created successfully
  });

  it('should create a checkout session and return the URL', () => {
    const mockResponse = { url: 'https://stripe.com/checkout-session' };

    const lineItems: Array<{
      price_data: {
        currency: string;
        product_data: { name: string };
        unit_amount: number;
      };
      quantity: number;
    }> = [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Test Product' },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ];
    const successUrl = 'https://example.com/success';
    const cancelUrl = 'https://example.com/cancel';

    service
      .createCheckoutSession(lineItems, successUrl, cancelUrl)
      .subscribe((response) => {
        expect(response).toEqual(mockResponse); // Verify the response matches the mock response
      });

    const req = httpMock.expectOne(`${environment.apiUrl}/stripe/checkout`); // Verify the correct URL
    expect(req.request.method).toBe('POST'); // Verify the HTTP method is POST
    expect(req.request.body).toEqual({
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
    }); // Verify the request payload

    req.flush(mockResponse); // Respond with the mock data
  });

  it('should handle HTTP errors gracefully', () => {
    const lineItems: Array<{
      price_data: {
        currency: string;
        product_data: { name: string };
        unit_amount: number;
      };
      quantity: number;
    }> = [];
    const successUrl = '';
    const cancelUrl = '';

    service.createCheckoutSession(lineItems, successUrl, cancelUrl).subscribe({
      next: () => fail('Expected an error, but got a response'),
      error: (error) => {
        expect(error.status).toBe(400); // Verify the error status is 400
      },
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/stripe/checkout`); // Verify the correct URL
    req.flush('Error occurred', { status: 400, statusText: 'Bad Request' }); // Simulate an error response
  });
});
