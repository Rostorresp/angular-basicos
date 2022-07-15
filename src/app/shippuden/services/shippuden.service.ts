import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/shippuden.interface";



@Injectable()
export class ShippudenService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Kakashi',
            poder: 13700
        },
        {
            nombre: 'Madara',
            poder: 17500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }


    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }
}