import { Component, OnInit } from '@angular/core';

import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  workout: Workouts[] = [];
  todaysDate = new Date();

  constructor(
    private workoutService: WorkoutService,

    
    ) { }

  ngOnInit(): void {
    this.getWorkout();
  }

  getWorkout(): void {
    this.workoutService.getWorkout()
        .subscribe(workout => this.workout = workout);
  }


}