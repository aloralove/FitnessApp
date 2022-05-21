import { Component, OnInit } from '@angular/core';

import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})

export class ChallengesComponent implements OnInit {
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