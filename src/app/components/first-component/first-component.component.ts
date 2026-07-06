import { Component } from '@angular/core';
import { IntoComponentComponent } from '../into-component/into-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule, IntoComponentComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Thiago";
  age: number = 41;
}
