import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.interface';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produto: Produto = {
    id: '1',
    nome: 'Mouse Gamer',
    preco: 149.90,
    emEstoque: true
  };

  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {
    this.produtos = this.produtosService.obterProdutos();
  }
}
