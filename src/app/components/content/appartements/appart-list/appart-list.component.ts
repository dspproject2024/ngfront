import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { Router } from '@angular/router';
import { StripeService } from '../../../../services/stripe.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-list.component.html',
  styleUrls: ['./appart-list.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }, // Définit la localisation en français
  ],
})
export class AppartListComponent implements OnInit {
  habitats: Habitat[] = []; // Tous les habitats
  filteredHabitats: Habitat[] = []; // Habitats filtrés pour la recherche
  searchTerm: string = ''; // Variable de recherche
  loading = false;
  errorMessage: string | null = null;
  apiUrl = environment.apiUrl;

  searchData = {
    destination: '',
    arrival: '',
    departure: '',
  };

  imageUrls: { [key: number]: string } = {}; // Associer l'ID de l'habitat à l'URL de l'image

  constructor(
    private habitatService: HabitatService,
    private router: Router,
    private stripeService: StripeService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer la catégorie depuis les paramètres de l'URL
    this.route.queryParams.subscribe((params) => {
      const category = params['category'];
      this.fetchHabitats(category); // Passe la catégorie pour filtrer les habitats
    });
  }

  onSearch() {
    this.filteredHabitats = this.habitats.filter(
      (habitat) =>
        (!this.searchData.destination ||
          habitat.city
            ?.toLowerCase()
            .includes(this.searchData.destination.toLowerCase())) &&
        (!this.searchData.arrival ||
          new Date(habitat.startDate) <= new Date(this.searchData.arrival)) &&
        (!this.searchData.departure ||
          new Date(habitat.endDate) >= new Date(this.searchData.departure))
    );
  }

  // Récupérer tous les habitats et les filtrer par catégorie si nécessaire
  fetchHabitats(category?: string): void {
    this.habitatService.getHabitats().subscribe(
      (response: any) => {
        // Extraction de la clé 'hydra:member'
        const habitatsData: Habitat[] = response['hydra:member'] || [];

        // Assignation et traitement des données
        this.habitats = habitatsData
          .filter((habitat: Habitat) => habitat.title && habitat.city) // Vérifie que les données sont valides
          .sort(
            (a: Habitat, b: Habitat) =>
              new Date(b.createdAt || '').getTime() -
              new Date(a.createdAt || '').getTime()
          )
          .slice(0, 6);
        console.log(this.habitats);

        // Filtrer les habitats si une catégorie est spécifiée
        this.filteredHabitats = category
          ? this.habitats.filter((habitat) => habitat.category === category)
          : this.habitats;

        // Charger les images pour chaque habitat
        this.habitats.forEach((habitat) => {
          if (habitat.images && habitat.images.length > 0) {
            const imageObject = `${this.apiUrl}${habitat.images[0]}`;
            const imageApiUrl = imageObject.replace('/api', '');

            // Requête pour récupérer les détails de l'image
            this.http.get<any>(imageApiUrl).subscribe(
              (response) => {
                const imageUrl = response.url.startsWith('http')
                  ? response.url
                  : `${this.apiUrl}${response.url}`;
                this.imageUrls[habitat.id || -1] = imageUrl; // Handle undefined habitat.id
              },
              () => {
                this.imageUrls[habitat.id || -1] =
                  'assets/images/placeholder-image7@2x.png';
              }
            );
          } else {
            this.imageUrls[habitat.id || -1] =
              'assets/images/placeholder-image7@2x.png';
          }
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des habitats:', error);
      }
    );
  }



  // Filtrer les habitats en fonction du terme de recherche
  filterHabitats(): void {
    this.filteredHabitats = this.habitats.filter((habitat) =>
      [
        habitat.title,
        habitat.description,
        habitat.pricePerNight?.toString(),
        habitat.city,
        habitat.country,
      ]
        .filter(Boolean)
        .some((field) =>
          field?.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
    );
  }

  // Afficher les détails d'un habitat
  viewHabitat(habitatId: number | undefined): void {
    if (habitatId !== undefined) {
      this.router.navigate(['/id-appart', habitatId]);
    } else {
      console.error("ID de l'habitat est manquant");
    }
  }

  // Afficher les commentaires pour un habitat
  viewComments(habitatId: number | undefined): void {
    if (habitatId !== undefined) {
      this.router.navigate(['/comments', habitatId]);
    } else {
      console.error("ID de l'habitat est manquant pour les commentaires");
    }
  }

  // Démarrer la procédure de paiement Stripe
  startCheckout(title: string, amount: number): void {
    this.loading = true;
    this.errorMessage = null;

    const lineItems = [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: title,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ];

    const successUrl = `${window.location.origin}/success`;
    const cancelUrl = `${window.location.origin}/cancel`;

    this.stripeService
      .createCheckoutSession(lineItems, successUrl, cancelUrl)
      .subscribe(
        (response: { url: string }) => {
          this.loading = false;
          if (response && response.url) {
            window.location.href = response.url;
          } else {
            this.errorMessage = 'La création de la session Stripe a échoué.';
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'Erreur lors de la création de la session Stripe. Veuillez réessayer plus tard.';
        }
      );
  }
}
