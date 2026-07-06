import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Cria uma lista de produtos com alguns dados iniciais
  private lista: Produto[] = [
    { id: '1', nome: 'Mouse Gamer', preco: 149.90, emEstoque: true },
    { id: '2', nome: 'Teclado Mecânico', preco: 299.00, emEstoque: false }
  ];

  // Método para retornar a lista de produtos
  obterProdutos(): Produto[] {
    return this.lista;
  }
}
