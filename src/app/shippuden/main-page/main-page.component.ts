import { Component } from '@angular/core';

import { Personaje } from '../interfaces/shippuden.interface';
import { ShippudenService } from '../services/shippuden.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Deidara',
    poder: 1000
  }
  constructor() { }
}
