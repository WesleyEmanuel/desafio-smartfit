import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from 'src/app/models/units/location.model';
import { FilterUnitsService } from 'src/app/services/units/filter-units.service';
import { UnitsService } from 'src/app/services/units/units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();

  results: Location[] = [];

  filteredResults: Location[] = [];

  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private unitsService: UnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    this.getAllUnits();
  }

  onSubmit(): void {
    let { hour, showClosed } = this.formGroup.value;

    if (!showClosed) {
      this.filteredResults = this.filterUnitsService.filterByOpenUnits(
        this.results
      );
    } else {
      this.filteredResults = this.results;
    }

    if (hour) {
      this.filteredResults = this.filterUnitsService.filterUnitsByOpenHour(
        this.filteredResults,
        hour
      );
    }

    this.unitsService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
  }

  getAllUnits(): void {
    this.unitsService.getAllUnits().subscribe((data) => {
      const response = data.filter((location) => location.schedules);
      this.results = response;
      this.filteredResults = response;
    });
  }
}
