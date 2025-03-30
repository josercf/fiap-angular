import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutoComponent } from './components/produto/produto.component'; // Importa o componente ProdutoComponent
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component'; // Importa o componente ProdutoFormComponent   

export const routes: Routes = [
    {path: '', component: HomeComponent}, // Rota padrão que redireciona para o componente HomeComponent
  
    {path: 'sobre', component: SobreComponent}, // Rota que redireciona para o componente SobreComponent
    {path: 'produtos', component: ProdutoComponent}, // Rota que carrega o componente ProdutoComponent de forma assíncrona
    {path: 'produtos/:id', component: ProdutoFormComponent}, // Rota que carrega o componente ProdutoComponent com um parâmetro de rota id
    {path: 'produtos/:id/editar', component: ProdutoFormComponent}, // Rota que carrega o componente ProdutoComponent com um parâmetro de rota id para edição
    {path: 'produtos/novo', component: ProdutoFormComponent}, // Rota que carrega o componente ProdutoComponent para criar um novo produto
    {path: '**', redirectTo: ''}// Rota que redireciona para a rota padrão se nenhuma das rotas acima for encontrada
];

