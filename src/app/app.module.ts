import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StartTrainingComponent } from './pages/start-training/start-training.component';
import { AdjustTrainingComponent } from './pages/adjust-training/adjust-training.component';
import { TrainingHistoryComponent } from './pages/training-history/training-history.component';
import { SocialZoneComponent } from './pages/social-zone/social-zone.component';
import { TimerComponent } from './pages/start-training/component/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartTrainingComponent,
    AdjustTrainingComponent,
    TrainingHistoryComponent,
    SocialZoneComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
