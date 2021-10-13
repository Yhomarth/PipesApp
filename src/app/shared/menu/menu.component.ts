import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {
        label : 'Pipes de Angular',
        icon  : 'pi pi-desktop',
        items : [
          {
            label : 'Textos y Fechas',
            icon  : 'pi pi-calendar',
            routerLink : '/'
          },

          {
            label : 'Números',
            icon  : 'pi pi-dollar',
            routerLink : 'numeros'
          },

          {
            label : 'No comunes',
            icon  : 'pi pi-twitter',
            routerLink : 'no-comunes'
          },

          {
            label : 'Ordenadar',
            icon  : 'pi pi-apple',
            routerLink : 'ordenar'
          }
        ]
      },

      {
        label : 'Personalizados',
        icon  : 'pi pi-cog'
      }
    ];

  }

}
