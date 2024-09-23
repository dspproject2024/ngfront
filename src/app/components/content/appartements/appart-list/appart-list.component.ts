import { Component, OnInit } from '@angular/core';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { Router } from '@angular/router';
import { StripeService } from '../../../../services/stripe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-list.component.html',
  styleUrls: ['./appart-list.component.css'] // Fixes: Corrected 'styleUrl' to 'styleUrls'
})
export class AppartListComponent implements OnInit {
  habitats: Habitat[] = []; // All habitats
  filteredHabitats: Habitat[] = []; // Filtered habitats
  searchTerm: string = ''; // Variable to hold the search term
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private habitatService: HabitatService,
    private router: Router,
    private stripeService: StripeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchHabitats();
  }

  // Fetch all habitats
  fetchHabitats(): void {
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        // Assuming the API returns habitats in 'hydra:member'
        this.habitats = data['hydra:member'] || [];
        this.filteredHabitats = [...this.habitats]; // Initialize filtered habitats
      },
      (error) => {
        console.error('Error fetching habitats:', error);
      }
    );
  }

  // Search and filter habitats based on the title
  onSearch(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    this.filteredHabitats = this.habitats.filter(habitat =>
      habitat.title.toLowerCase().includes(searchTermLower) ||
      (habitat.description && habitat.description.toLowerCase().includes(searchTermLower)) ||
      (habitat.pricePerNight && habitat.pricePerNight.toString().toLowerCase().includes(searchTermLower)) ||
      (habitat.city && habitat.city.toString().toLowerCase().includes(searchTermLower)) ||
      (habitat.country && habitat.country.toString().toLowerCase().includes(searchTermLower))
     // (habitat.startDate && this.formatDate(habitat.startDate).startsWith(searchTermLower)) // Convert startDate to a formatted string
    );
  }

// Helper function to format dates as 'dd/mm/yyyy' (French style)
  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JS
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Returns the date in 'dd/mm/yyyy' format
  }


  // View habitat details
  viewHabitat(habitatId: number): void {
    this.router.navigate(['/id-appart', habitatId]);
  }

  // View comments for a habitat
  viewComments(habitatId: number): void {
    this.router.navigate(['/comments', habitatId]);
  }

  // Method to initiate the Stripe Checkout
  startCheckout(title: string, amount: number): void {
    this.loading = true;
    this.errorMessage = null;

    const lineItems = [
      {
        price_data: {
          currency: 'eur', // Stripe expects lowercase currency codes
          product_data: {
            name: title,
          },
          unit_amount: amount * 100, // Amount is in cents, multiply euros by 100
        },
        quantity: 1,
      },
    ];

    // Define URLs for redirect after success or cancel
    const successUrl = `${window.location.origin}/success`; // Redirect URL after success
    const cancelUrl = `${window.location.origin}/cancel`; // Redirect URL after cancel

    this.stripeService.createCheckoutSession(lineItems, successUrl, cancelUrl).subscribe(
      (response: { url: string }) => {
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
        this.errorMessage = 'Error creating checkout session. Please try again later.';
        console.error('Error:', error);
      }
    );
  }
}
