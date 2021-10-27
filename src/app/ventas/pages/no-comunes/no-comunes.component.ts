import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre : string = 'Rosa';
  genero : string = 'femenino';

  mapingObj = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }


}
