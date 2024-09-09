import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appart-appart-item',
  templateUrl: './appart-appart-item.component.html',
  styleUrls: ['./appart-appart-item.component.css']
})
export class AppartAppartItemComponent {
  @Input() product: any;
}
