import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

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

  contador  = 0;
}
