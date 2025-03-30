import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  contador: number = 0;
  incrementar() {
    this.contador++;
  }
}
