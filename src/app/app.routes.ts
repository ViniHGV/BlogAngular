import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { NewDetailComponent } from './pages/new-detail/new-detail.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'new/:id', component: NewDetailComponent },
];
