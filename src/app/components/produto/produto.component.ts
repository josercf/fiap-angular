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
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe((resposta) => {
      this.produtos = resposta;
    });
  }
}
