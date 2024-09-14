// category-item.component.ts
import { Component, Input } from '@angular/core';
import {Category} from "../../../../models/category.model";

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent {
  @Input() category!: Category;
}

