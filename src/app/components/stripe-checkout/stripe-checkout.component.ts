// src/app/components/stripe-checkout/stripe-checkout.component.ts
import { Component } from '@angular/core';
import { StripeService } from '../../services/stripe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.css'],
})
export class StripeCheckoutComponent {
  loading = false;
  errorMessage: string | null = null;

  constructor(private stripeService: StripeService, private router: Router) {}

  // Method to initiate the Stripe Checkout
  startCheckout(): void {
    this.loading = true;
    this.errorMessage = null;

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Product Name',
          },
          unit_amount: 2000, // Amount in cents (e.g., 2000 = $20.00)
        },
        quantity: 1,
      },
    ];

    // Define URLs for redirect after success or cancel
    const successUrl = `${window.location.origin}/success`; // Redirect URL after success
    const cancelUrl = `${window.location.origin}/cancel`; // Redirect URL after cancel

    this.stripeService
      .createCheckoutSession(lineItems, successUrl, cancelUrl)
      .subscribe(
        (response: { url: string }) => { // Ensure the response contains a string 'url'
          this.loading = false;
          if (response && response.url) {
            // Redirect to Stripe Checkout page using the URL provided by the server
            window.location.href = response.url;
          } else {
            this.errorMessage = 'Failed to create a Stripe Checkout session.';
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'Error creating checkout session. Please try again later.';
          console.error('Error:', error);
        }
      );
  }
}
