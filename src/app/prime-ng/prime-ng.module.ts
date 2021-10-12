import { NgModule } from '@angular/core';


// primeNG Module
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  exports : [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
