import { Location } from './location.model';

export interface UnitsResponse {
  current_country_id: number;
  locations: Location[];
  wp_total: number;
  total: number;
  success: boolean;
}
