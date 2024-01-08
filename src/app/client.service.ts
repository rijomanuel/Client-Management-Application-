import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:3000/client";

  constructor(private httpClient: HttpClient) {}

  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseURL);
  }

  createClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.baseURL, client);
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
}
