import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../../models/units/units-response.model';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  private readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) {}

  getAllUnits(): Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(this.apiUrl);
  }
}
