import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande = '';
  hermanoChico = '';

  setNombreHermanoGrande(hermano: string) {
    this.hermanoGrande = hermano;
  }

  setNombreHermanoChico(hermano: string) {
    this.hermanoChico = hermano;
  }

  getNombreHermanoGrande() {
    return this.hermanoGrande;
  }

  getNombreHermanoChico() {
    return this.hermanoChico;
  }

  saludar(hermano: string) {
    console.log(`Hola ${hermano}`);
  }

  preguntar():string {
    return 'Que tal?';
  }

  constructor() { }
}
