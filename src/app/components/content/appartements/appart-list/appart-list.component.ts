import { Component, OnInit } from '@angular/core';
import { HabitatService } from '../../../../services/habitat.service';
import { Habitat } from '../../../../models/habitat.model';
import { Router } from '@angular/router';
import { StripeService } from '../../../../services/stripe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-list.component.html',
  styleUrls: ['./appart-list.component.css']
})
export class AppartListComponent implements OnInit {
  habitats: Habitat[] = []; // Tous les habitats
  filteredHabitats: Habitat[] = []; // Habitats filtrés pour la recherche
  searchTerm: string = ''; // Variable de recherche
  loading = false;
  errorMessage: string | null = null;


  imageUrls: { [key: number]: string } = {}; // Associer l'ID de l'habitat à l'URL de l'image

  constructor(
    private habitatService: HabitatService,
    private router: Router,
    private stripeService: StripeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchHabitats();  // Appeler la méthode pour récupérer les habitats au chargement
  }

  // Récupérer tous les habitats et les limiter aux 6 plus récents
  fetchHabitats(): void {
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        this.habitats = (data['hydra:member'] || [])
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Trier par date de création (descendant)
          .slice(0, 6);  // Limiter à 6 éléments

        // Charger les images pour chaque habitat
        this.habitats.forEach(habitat => {
          if (habitat.images && habitat.images.length > 0) {
            let imageObject = `https://localhost:8000${habitat.images[0]}`  // Accéder au premier objet image
            let imageApiUrl = imageObject;  // Récupérer l'URL de l'image

            console.log(imageApiUrl);
            // Requête pour récupérer les détails de l'image
            this.http.get<any>(imageApiUrl).subscribe(
              (response) => {
                const imageUrl = response.url.startsWith('http') ? response.url : `https://localhost:8000${response.url}`;
                this.imageUrls[habitat.id] = imageUrl;  // Associer l'image à l'ID de l'habitat
              },
              (error) => {
                console.error(`Erreur lors du chargement de l'image pour l'habitat ${habitat.title}:`, error);
                this.imageUrls[habitat.id] = 'assets/images/placeholder-image7@2x.png';  // Image par défaut en cas d'erreur
              }
            );
          } else {
            // Image par défaut si aucune image n'est associée à l'habitat
            this.imageUrls[habitat.id] = 'assets/images/placeholder-image7@2x.png';
          }
        });

        // Initialement, les habitats filtrés sont les mêmes que tous les habitats
        this.filteredHabitats = this.habitats;
      },
      (error) => {
        console.error('Erreur lors de la récupération des habitats:', error);
      }
    );
  }

  // Filtrer les habitats en fonction du terme de recherche
  filterHabitats(): void {
    this.filteredHabitats = this.habitats.filter(habitat =>
      habitat.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      habitat.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Afficher les détails d'un habitat
  viewHabitat(habitatId: number): void {
    this.router.navigate(['/id-appart', habitatId]);
  }

  // Afficher les commentaires pour un habitat
  viewComments(habitatId: number): void {
    this.router.navigate(['/comments', habitatId]);
  }

  // Démarrer la procédure de paiement Stripe
  startCheckout(title: string, amount: number): void {
    this.loading = true;
    this.errorMessage = null;

    const lineItems = [
      {
        price_data: {
          currency: 'eur',  // Stripe attend les codes de devise en minuscules
          product_data: {
            name: title,
          },
          unit_amount: amount * 100,  // Convertir en cents pour Stripe
        },
        quantity: 1,
      },
    ];

    const successUrl = `${window.location.origin}/success`;  // URL de redirection après succès
    const cancelUrl = `${window.location.origin}/cancel`;  // URL de redirection après annulation

    this.stripeService.createCheckoutSession(lineItems, successUrl, cancelUrl).subscribe(
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
        this.errorMessage = 'Erreur lors de la création de la session Stripe. Veuillez réessayer plus tard.';
      }
    );
  }
}
