import { Component } from '@angular/core';

@Component({
  selector: 'app-newrutina',
  templateUrl: './newrutina.component.html',
  styleUrls: ['./newrutina.component.css']
})
export class NewrutinaComponent {
  rutina = {
    nombre: '',
    ejercicio: ''
    // Agrega más propiedades según tus necesidades
  };

  submitForm() {
    // Aquí puedes procesar los datos enviados del formulario, como guardarlos en una base de datos o generar un archivo Excel
    console.log(this.rutina);
  }
}
