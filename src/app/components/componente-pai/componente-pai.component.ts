import { Component } from '@angular/core';
import { BotaoFilhoComponent } from '../botao-filho/botao-filho.component';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [ BotaoFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  mensagem: string = '';

  mensagemRecebida(valor: string) {
    this.mensagem = valor;
  }
}
