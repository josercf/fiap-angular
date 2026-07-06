import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventoComponent } from './components/evento/evento.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, EventoComponent, ComponentePaiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-primeiro-app';
  imagemUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = false;
}
