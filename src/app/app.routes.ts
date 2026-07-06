import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, // Rota padrão
    {path: 'sobre', component: SobreComponent}, // Rota sobre
    {path: '**', redirectTo: ''} // Rota coringa
];
