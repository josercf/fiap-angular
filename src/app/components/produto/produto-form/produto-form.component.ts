import { Component } from '@angular/core';
import { Produto } from '../../../models/produto.interface';// Importa a interface Produto
import { ProdutosService } from '../../../services/produtos.service'; // Importa o serviço ProdutosService
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [FormsModule], // Importa o módulo FormsModule para usar formulários reativos
  // O FormsModule é necessário para usar diretivas de formulários, como ngModel
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {
  novoProduto: Produto = {
    nome: '',
    preco: 0,
    emEstoque: true,
    id: ''
  };
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'novo') {
      this.produtosService.getProduto(id).subscribe((resposta) => {
        this.novoProduto = resposta; // Preenche o formulário com os dados do produto existente
      });
    }
  }

  salvar() {
    if (this.novoProduto.id && this.novoProduto.id.trim() !== '') {
      this.produtosService.updateProduto(this.novoProduto).subscribe((resultado) => {
        alert('Produto atualizado com sucesso!');
        window.location.href = '/produtos';
      });
      return;
    }
    this.produtosService.addProduto(this.novoProduto).subscribe((resultado) => {
      alert('Produto criado com sucesso!');
      window.location.href = '/produtos';
    });
  }

  cancelar() {
    window.location.href = '/produtos'; // Redireciona para a lista de produtos
  }
}
