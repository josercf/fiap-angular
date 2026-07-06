import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-into-component',
  standalone: true,
  imports: [],
  templateUrl: './into-component.component.html',
  styleUrl: './into-component.component.css'
})
export class IntoComponentComponent {
  //Recebendo dados do componente pai
  @Input() name:string = "";
  @Input() age:number = 0;
 
}
