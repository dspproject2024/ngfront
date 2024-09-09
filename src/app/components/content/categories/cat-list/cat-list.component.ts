// category-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent {
  categories = [
    { title: 'Forêt', description: 'Hébergement au cœur de la forêt...', imageUrl: '../../../../assets/images/placeholder-image16@2x.png' },
    { title: 'Eau', description: 'Logements en bord de l\'eau...', imageUrl: '../../../../assets/images/placeholder-image17@2x.png' },
    { title: 'Avion', description: 'Séjour unique dans un avion...', imageUrl: '../../../../assets/images/placeholder-image3@2x.png' },
    { title: 'Bateaux', description: 'Appartements dans des bateaux...', imageUrl: '../../../../assets/images/placeholder-image18@2x.png' },
    { title: 'Yourtes', description: 'Sélection de yourtes...', imageUrl: '../../../../assets/images/placeholder-image19@2x.png' },
    { title: 'Vans', description: 'Séjour dans un van aménagé...', imageUrl: '../../../../assets/images/placeholder-image20@2x.png' },
  ];
}

