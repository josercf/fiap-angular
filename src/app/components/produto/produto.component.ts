import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o módulo CommonModule para usar diretivas comuns do Angular
import { Produto } from '../../models/produto.interface';// Importa a interface Produto
import { ActivatedRoute } from '@angular/router'; // Importa o ActivatedRoute para acessar os parâmetros da rota
import { ProdutosService } from '../../services/produtos.service'; // Importa o serviço ProdutosService

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule], // Importa o módulo CommonModule para usar diretivas comuns do Angular
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  // Define uma propriedade produto do tipo Produto
  // A propriedade produto é inicializada com um objeto que implementa a interface Produto
  // produto: Produto = {
  //   id: 1,
  //   nome: 'Mouse Gamer',
  //   preco: 149.90,
  //   emEstoque: true
  // };

  produtos: Produto[] = [];
  // //Fazendo a injeção de dependência do serviço ProdutosService no construtor do componente
  // // O serviço ProdutosService é responsável por fornecer os dados dos produtos
  constructor(private produtosService: ProdutosService) {

  }

  ngOnInit() {
    // Chama o método getProdutos do serviço ProdutosService para obter a lista de produtos
    // O método getProdutos retorna um Observable, que é assinado para receber a resposta da API
    this.produtosService.getProdutos().subscribe((resposta) => {
      this.produtos = resposta;
    });
  }
  // Método para remover um novo produto à lista de produtos
  remover(id: string): void {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.produtos = this.produtos.filter((c) => c.id !== id);
      this.produtosService.deleteProduto(id).subscribe(() => {
        alert('Removido com sucesso!');
        window.location.href = '/produtos';
      });
    }
  }
  // Método para editar um produto existente na lista de produtos
  editar(id: string): void {
    console.log(`/produtos/${id}/editar`);
    window.location.href = `/produtos/${id}/editar`;
  }
}
