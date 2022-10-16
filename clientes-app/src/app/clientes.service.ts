import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiUrl: string = environment.apiUrlBase + '/api/clientes';

  constructor( private http: HttpClient ) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.post<Cliente>(this.apiUrl, cliente, { headers });
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.get<Cliente[]>(this.apiUrl, { headers });
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }
}
