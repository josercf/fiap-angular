import { Component, Output, EventEmitter } from '@angular/core';
//Precisa importar o EventEmitter e o Output para criar um evento de saída

@Component({
  selector: 'app-botao-filho',
  standalone: true,
  imports: [],
  templateUrl: './botao-filho.component.html',
  styleUrl: './botao-filho.component.css'
})
export class BotaoFilhoComponent {
  @Output() clicado = new EventEmitter<string>(); //O @Output() indica que o evento clicado é um evento de saída
  //O EventEmitter<string>() indica que o evento clicado é um evento de saída que emite uma string
}
