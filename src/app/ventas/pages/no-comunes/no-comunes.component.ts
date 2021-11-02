import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  persona = {
    nombre : 'Yhomarth',
    edad : 35,
    direccion : 'Gazcue'
  }

  heroes = [
    {
      nombre : 'Superman',
      vuela : true
    },
    {
      nombre : 'Batman',
      vuela : false
    },
    {
      nombre : 'Ironman',
      vuela : true
    },
    {
      nombre : 'Robin',
      vuela : false
    }
  ]

  // i18nplural
  clientes : string [] = ['Juan', 'Pedro', 'Maria', 'José'];

  mapingObjClientes = {
   '=0': 'no tenemos ningún cliente esperando.',
   '=1' : 'un cliente esperando.',
   'other' : '# clientes esperando.' 
  }

  tituloBotonBorrar:string = 'Borrar un Cliente';


  cambiarCliente(){

    this.nombre = this.nombre === 'Rosa' ? 'Yhomarth' : 'Rosa';
    this.genero = this.genero === 'femenino' ? 'masculino' : 'femenino';

  }

  borrarCliente(){

    //console.log('boton borrar presionado');

    this.clientes.pop();

    // if(this.clientes.length >= 1 ){
    //   this.clientes.pop();
    // }
    // else{
    //   this.clientes = ['Juan', 'Pedro', 'Maria', 'José'];
      
    // }


    //   this.tituloBotonBorrar = this.clientes.length > 0 ? 'Borrar un Cliente' : 'Restablecer clientes';

  }


  // async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject)=>{

    setTimeout( ()=> {

      resolve('Tenemos data de promesa');
    
    }, 3000);

  })

}
