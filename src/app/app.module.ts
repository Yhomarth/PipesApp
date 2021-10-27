import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';


// Módulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localES from  '@angular/common/locales/es-DO';
import localJP from '@angular/common/locales/ja'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localES);
registerLocaleData(localJP);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide : LOCALE_ID,
      useValue : 'es-DO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
