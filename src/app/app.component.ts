import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './models/units/location.model';
import { UnitsService } from './services/units/units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'desafio-smartfit';
  showCards: BehaviorSubject<boolean> = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitsService: UnitsService) {}

  submitEvent() {
    this.showCards.next(true);
    this.unitsList = this.unitsService.getFilteredUnits();
  }
}
