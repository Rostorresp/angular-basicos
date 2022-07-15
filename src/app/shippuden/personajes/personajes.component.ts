import { Component } from '@angular/core';

import { ShippudenService } from '../services/shippuden.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {

  get personajes() {
    return this.shippudenService.personajes;
  }
  
  
  constructor(private shippudenService: ShippudenService) { }

}
