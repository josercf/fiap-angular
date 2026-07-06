import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutoComponent } from './components/produto/produto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'produtos', component: ProdutoComponent},
    {path: '**', redirectTo: ''}
];
