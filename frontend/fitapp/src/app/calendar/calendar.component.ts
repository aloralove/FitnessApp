import { Component, OnInit } from '@angular/core';

import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
