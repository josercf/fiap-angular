import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // private lista: Produto[] = [
  //   { id: '1', nome: 'Mouse Gamer', preco: 149.90, emEstoque: true },
  //   { id: '2', nome: 'Teclado Mecânico', preco: 299.00, emEstoque: false }
  // ];
  // obterProdutos(): Produto[] {
  //   return this.lista;
  // }
  private apiUrl = 'http://localhost:3000/produtos';
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}
