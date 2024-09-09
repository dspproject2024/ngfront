import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-more-categories',
  templateUrl: './cat-more-categories.component.html',
  styleUrls: ['./cat-more-categories.component.css']
})
export class CatMoreCategoriesComponent implements OnInit {
  moreCategories = [
    {
      name: 'Bateaux',
      description: 'Des appartements incroyables situés dans de magnifiques bateaux, offrant une expérience de vie unique au fil de l\'eau.',
      imageUrl: '../../assets/images/placeholder-image18@2x.png'
    },
    {
      name: 'Yourtes',
      description: 'Découvrez notre vaste sélection de yourtes uniques, spacieuses et confortables, conçues pour une expérience de séjour inoubliable au plus près de la nature.',
      imageUrl: '../../assets/images/placeholder-image19@2x.png'
    },
    {
      name: 'Vans',
      description: 'Vivez une expérience unique en séjournant dans un van aménagé avec tout le confort nécessaire pour profiter pleinement de vos aventures en plein air et n\'importe où.',
      imageUrl: '../../assets/images/placeholder-image20@2x.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

