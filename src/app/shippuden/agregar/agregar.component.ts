import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/shippuden.interface';
import { ShippudenService } from '../services/shippuden.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private shippudenService: ShippudenService) {

  }

  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo)

    this.shippudenService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
