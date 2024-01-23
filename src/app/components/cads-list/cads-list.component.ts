import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/units/location.model';

@Component({
  selector: 'app-cads-list',
  templateUrl: './cads-list.component.html',
  styleUrls: ['./cads-list.component.scss'],
})
export class CadsListComponent {
  @Input() unitsList: Location[] = [];
}
