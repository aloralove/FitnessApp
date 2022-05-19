import { Component, OnInit } from '@angular/core';
import { Workouts } from '../workouts';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workouts = WORKOUTS;
  selectedWorkouts?: Workouts;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(workouts: Workouts): void {
    this.selectedWorkouts = workouts;
  }
}