import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/units/location.model';

const OPENING_HOURS = {
  morning: {
    first: '06',
    last: '12',
  },
  afternoon: {
    first: '12',
    last: '18',
  },
  night: {
    first: '18',
    last: '23',
  },
};

type HoursIndexes = 'morning' | 'afternoon' | 'night';

@Injectable({
  providedIn: 'root',
})
export class FilterUnitsService {
  transformWeekday(weekday: number) {
    switch (weekday) {
      case 0:
        return 'Dom.';
      case 6:
        return 'Sab.';
      default:
        return 'Seg. à Sex.';
    }
  }

  filterByOpenUnits(units: Location[]): Location[] {
    return units.filter((location) => location.opened);
  }

  filterUnitsByOpenHour(units: Location[], hour: HoursIndexes): Location[] {
    return units.filter((location) => this.filterByHour(location, hour));
  }

  filterByHour(unit: Location, hour: HoursIndexes) {
    const OPEN_HOUR = OPENING_HOURS[hour].first;

    const CLOSE_HOUR = OPENING_HOURS[hour].last;

    let open_hour_filter = parseInt(OPEN_HOUR, 10);
    let close_hour_filter = parseInt(CLOSE_HOUR, 10);

    let today_weekday = this.transformWeekday(new Date().getDay());

    for (let schedule of unit.schedules!) {
      let schedule_hour = schedule.hour;
      let schedule_weekday = schedule.weekdays;

      if (schedule_weekday == today_weekday) {
        if (schedule_hour != 'Fechada') {
          let [unit_open_hour, unit_close_hour] = schedule_hour.split(' às ');

          let unit_open_hour_filter = parseInt(unit_open_hour.replace('h', ''));
          let unit_close_hour_filter = parseInt(
            unit_close_hour.replace('h', '')
          );

          return (
            unit_open_hour_filter <= open_hour_filter &&
            unit_close_hour_filter >= close_hour_filter
          );
        }
      }
    }

    return false;
  }
}
