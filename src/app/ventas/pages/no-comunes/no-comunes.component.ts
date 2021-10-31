import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nselect
  nombre : string = 'Rosa';
  genero : string = 'femenino';
  mapingObj = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  // i18nplural
  clientes : string [] = ['Juan', 'Pedro', 'Maria'];

  mapingObjClientes = {
   '=0': 'no tenemos ningún cliente esperando.',
   '=1' : 'un cliente esperando.',
   'other' : '# clientes esperando.' 
  }

}
