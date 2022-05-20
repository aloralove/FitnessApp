import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutSearchComponent } from './workout-search/workout-search.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutComponent,
    WorkoutDetailComponent,
    WorkoutSearchComponent,
    MessagesComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
