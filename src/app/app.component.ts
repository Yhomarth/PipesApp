import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Yhomarth ReYEs';
  valor: number = 1000;
  obj = {
    codigo : 1,
    mensaje : 'Esto es una prueba'
  }

  imprimeValores(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }




}
