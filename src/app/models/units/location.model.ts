import { Schedules } from './schedules.model';

export interface Location {
  id: number;
  title: string;
  content?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  locker_room?: string;
  schedules?: Schedules[];
  street?: string;
  region?: string;
  city_name?: string;
  state_name?: string;
  uf?: string;
}
