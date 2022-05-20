import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})

export class WorkoutDetailComponent implements OnInit {
  
  workouts: Workouts | undefined;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workoutService.getWorkouts(id)
      .subscribe(workouts => this.workouts = workouts);
  }

  goBack(): void {
    this.location.back();
  }

}