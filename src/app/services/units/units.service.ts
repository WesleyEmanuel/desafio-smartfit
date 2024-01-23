import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UnitsResponse } from '../../models/units/units-response.model';
import { Location } from 'src/app/models/units/location.model';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  private readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<
    Location[]
  >([]);
  private allUnits$: Observable<Location[]> =
    this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = [];

  constructor(private http: HttpClient) {
    this.http.get<UnitsResponse>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFilteredUnits(): Location[] {
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]) {
    this.filteredUnits = value;
  }
}
