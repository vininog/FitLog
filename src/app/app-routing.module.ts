import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjustTrainingComponent } from './pages/adjust-training/adjust-training.component';
import { HomeComponent } from './pages/home/home.component';
import { SocialZoneComponent } from './pages/social-zone/social-zone.component';
import { StartTrainingComponent } from './pages/start-training/start-training.component';
import { TrainingHistoryComponent } from './pages/training-history/training-history.component';

const routes: Routes = [
  { path: 'start-training', component: StartTrainingComponent },
  { path: 'adjust-training', component: AdjustTrainingComponent },
  { path: 'training-history', component: TrainingHistoryComponent },
  { path: 'social-zone', component: SocialZoneComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
