import { Component, OnInit } from '@angular/core';
import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  workout: Workouts[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getWorkout();
  }

  getWorkout(): void {
    this.workoutService.getWorkout()
      .subscribe(workout => this.workout = workout.slice(1, 5));
  }

}
