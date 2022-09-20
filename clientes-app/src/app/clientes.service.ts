import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

//  getClientes() : Observable<Cliente[]> {
//    return null;
//  }

  getClientes() : Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'João da Silva';
    cliente.cpf = '12345678900';
    cliente.dataCadastro = '20/09/2022';
    return [cliente];
  }
}
