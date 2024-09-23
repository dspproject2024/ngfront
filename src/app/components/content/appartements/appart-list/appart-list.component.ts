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
  habitats: any[] = []; // All habitats
  filteredThreeHabitats: Habitat[] = []; // Store the first three habitats
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
    this.habitatService.getHabitats().subscribe((data: any) => {
      this.habitats = data['hydra:member'];
    
      // Trier les habitats par date de création (descendant) et limiter à 6
      this.habitats.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.habitats = this.habitats.slice(0, 6);  // Limiter à 6 éléments
    
      console.log('Habitats chargés (limités à 6 derniers ajoutés):', this.habitats);
    
      // Parcours des habitats pour gérer les images
      this.habitats.forEach(habitat => {
        if (habitat.images && habitat.images.length > 0) {
          let imageApiUrl = habitat.images[0];  // Utilisez l'URL de la première image directement
    
          // Vérifier si l'URL contient déjà "https://localhost:8000"
          if (!imageApiUrl.startsWith('http')) {
            imageApiUrl = `https://localhost:8000${imageApiUrl}`; // Ajouter le domaine si nécessaire
          }
    
          console.log('Image API URL:', imageApiUrl);  // Vérifier l'URL de l'image API
    
          // Faire la requête pour récupérer les détails de l'image
          this.http.get<any>(imageApiUrl).subscribe(
            (response) => {
              // Utiliser l'URL de l'image depuis la réponse
              habitat.firstImageUrl = response.url.startsWith('http') ? response.url : `https://localhost:8000${response.url}`;
              console.log('Image URL:', habitat.firstImageUrl);
            },
            (error) => {
              console.error('Erreur lors du chargement de l\'image:', error);
              habitat.firstImageUrl = 'assets/images/placeholder-image7@2x.png';  // Image par défaut en cas d'erreur
            }
          );
        } else {
          // Image par défaut si aucune image n'est associée à l'habitat
          habitat.firstImageUrl = 'assets/images/placeholder-image7@2x.png';
        }
      });
    }, (error) => {
      console.error('Erreur lors de la récupération des habitats:', error);
    });
    
  }
    // Méthode pour charger l'URL de l'image depuis l'API
    loadImageUrl(imageApiUrl: string) {
      return this.http.get<any>('https://localhost:8000' + imageApiUrl);
    }

  // Fetch all habitats
  fetchHabitats(): void {
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        // Assuming the API returns habitats in 'hydra:member'
        this.habitats = (data['hydra:member'] || []).sort((a:Habitat, b:Habitat) => b.id - a.id);  // Tri décroissant par id
        /*console.log('Habitats triés par id (desc):', this.habitats);*/
      },
      (error) => {
        console.error('Error fetching habitats:', error);
      }
    );
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
