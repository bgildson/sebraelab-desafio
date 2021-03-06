import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@app/calendars/calendar.types';

@Component({
  selector: 'calendar-event-group',
  templateUrl: './calendar-event-group.component.html',
  styleUrls: ['./calendar-event-group.component.scss']
})
export class CalendarEventGroupComponent {
  @Input() eventsGroup: [string, CalendarEvent[]];
}
