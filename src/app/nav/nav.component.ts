import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) { }

  goLogin() {
    this.router.navigate(['/profile'])
  }
  goHome() {
    this.router.navigate(['/'])
  }
  goRutina() {
    this.router.navigate(['/mirutina'])
  }
  goEjercicios() {
    this.router.navigate(['/ejercicios'])
  }
}
