import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { FormsModule } from '@angular/forms';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [FormsModule, EstiloHermanosDirective],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {
  constructor( private _servicioFamiliar: ServicioFamiliarService) {}
  nombre = '';

  ngOnInit() {
    this._servicioFamiliar.setNombreHermanoChico('Hermano Chico');
    this.nombre = this._servicioFamiliar.getNombreHermanoChico();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getNombreHermanoGrande());
  }

}
