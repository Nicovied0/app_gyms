import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MirutinaComponent } from './mirutina/mirutina.component';
import { ProfileComponent } from './profile/profile.component';
import { NewrutinaComponent } from './newrutina/newrutina.component';
import { ExercicesComponent } from './exercices/exercices.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mirutina', component: MirutinaComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ejercicios', component: ExercicesComponent },
  { path: 'nuevaRutina', component: NewrutinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
