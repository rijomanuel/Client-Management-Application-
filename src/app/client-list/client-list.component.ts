
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import {ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  title = 'Client management system';

  clients: Client[] = [];
  

  constructor(private clientService: ClientService, private router:Router) 
  {
    
  }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.clientService.getClientList().subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error: any) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  updateClient(id:number)
  {
this.router.navigate(['update-client',id]);
  }
  deleteClient(id:number)
  {
    this.clientService.deleteClient(id).subscribe(data=>
      {
        console.log(data);
        this.getClients(); 
      })
  }
  clientDetails(id:number)
  {
    this.router.navigate(['client-details',id])
  }
   
 
  
  
}
