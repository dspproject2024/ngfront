import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appart-list',
  templateUrl: './appart-appart-list.component.html',
  styleUrls: ['./appart-appart-list.component.css']
})
export class AppartAppartListComponent implements OnInit {

  products = [
    { imageUrl: '../../assets/images/placeholder-image5@2x.png', name: 'Tanière Boisée', description: 'Tanière boisée d\'une incroyable beauté, offrant un confort absolu', price: '150€' },
    { imageUrl: '../../assets/images/placeholder-image21@2x.png', name: 'Vaisseau de l\'infini', description: 'Vaisseau de l\'infini avec un confort et des équipements de pointe pour une expérience IoT incroyable', price: '510€' },
    { imageUrl: '../../assets/images/placeholder-image7@2x.png', name: 'Le navire du pirate', description: 'Embarquez à bord d\'un magnifique navire au bord de l\'eau, plongez dans un univers de pirate pour vous procurer une aventure mémorable.', price: '610€' },
    { imageUrl: '../../assets/images/placeholder-image8@2x.png', name: 'La tente de ma tante', description: 'Une yourte faite avec amour, artisanat et souci du détail, comme le ferait votre tante bien aimée qui met tout son cœur dans ses réalisations.', price: '120€' },
    { imageUrl: '../../assets/images/placeholder-image9@2x.png', name: 'La ferme', description: 'Rendez-vous dans cette ferme incroyablement aménagée, offrant calme, douceur et apaisement au milieu de la verdure, des plantes et de l\'air pur.', price: '100€' },
    { imageUrl: '../../assets/images/placeholder-image10@2x.png', name: 'La villa de la montagne', description: 'Une maison familiale située à 70 mètres de hauteur en montagne, accessible en voiture ou à pied pour les plus aventuriers. Elle offre une vue panoramique sur toute la ville, ainsi que sur les majestueuses montagnes environnantes.', price: '1000€' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
