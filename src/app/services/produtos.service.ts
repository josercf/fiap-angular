import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.interface';
import { Observable } from 'rxjs'; // Importa o tipo Observable do RxJS para trabalhar com dados assíncronos
import { HttpClient } from '@angular/common/http'; // Importa o HttpClient para fazer requisições HTTP

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Cria uma lista de produtos com alguns dados iniciais
  // A lista é do tipo Produto[], ou seja, um array de objetos que implementam a interface Produto
  // private lista: Produto[] = [
  //   { id: 1, nome: 'Mouse Gamer', preco: 149.90, emEstoque: true },
  //   { id: 2, nome: 'Teclado Mecânico', preco: 299.00, emEstoque: false }
  // ];
   // Método para adicionar um novo produto à lista
  // O método recebe um objeto do tipo Produto como parâmetro e o adiciona à lista
  // obterProdutos(): Produto[] {
  //   return this.lista;
  // }
  private apiUrl = 'http://localhost:3000/produtos'; // URL da API onde os produtos estão armazenados
  // O HttpClient é injetado no construtor do serviço para que possa ser usado para fazer requisições HTTP
  constructor(private http:HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Método para adicionar um novo produto à API
  addProduto(produto: Produto): Observable<Produto> {
    produto.id = Date.now().toString(); // Define o id como um hash baseado no timestamp atual
    return this.http.post<Produto>(this.apiUrl, produto);
  }
  // Método para atualizar um produto existente na API
  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  // Método para deletar um produto da API
  deleteProduto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para buscar um produto específico na API
  getProduto(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
}
