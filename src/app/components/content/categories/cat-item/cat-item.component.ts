// category-item.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent {
  @Input() category: any;
}

