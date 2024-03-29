import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/units/location.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() unit?: Location;
}
