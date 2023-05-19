import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MirutinaComponent } from './mirutina/mirutina.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { NewrutinaComponent } from './newrutina/newrutina.component';
import { FormsModule } from '@angular/forms';
import { ExerciceComponent } from './exercice/exercice.component';
import { GroupMuscularComponent } from './group-muscular/group-muscular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    MirutinaComponent,
    NewrutinaComponent,
    ExerciceComponent,
    GroupMuscularComponent,
    ExercicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
