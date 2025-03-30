import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  status: string = 'ativo'; 
  corTexto: string = 'blue';
  tamanhoFonte: number = 20;
  estiloNegrito: boolean = true;
}
