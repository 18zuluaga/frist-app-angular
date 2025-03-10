import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() mensajeenviado = new EventEmitter<string>();
  mensaje: string = ''

  @Output() incrementarEnviado = new EventEmitter<void>();
  @Output() restarEnviado = new EventEmitter<void>();

  incrementar() {
    this.incrementarEnviado.emit()
  }

  restar () {
    this.restarEnviado.emit()
  }

  enviarMensaje() {
    this.mensajeenviado.emit(this.mensaje)
  }
}
