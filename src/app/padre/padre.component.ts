import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent implements OnInit {
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  nombre = '';

  ngOnInit() {
    this._servicioFamiliar.setNombreHermanoGrande('Hermano Grande');
    this.nombre = this._servicioFamiliar.getNombreHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getNombreHermanoChico());
  }

  mensaje: string = '';

  recibirMensaje($mensaje: string) {
    console.log($mensaje);
    this.mensaje = $mensaje;
  }

  incrementar() {
    this.contador++;
  }

  restar() {
    this.contador--;
  }

  contador = 0;
}
