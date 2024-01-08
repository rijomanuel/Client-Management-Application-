import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Client } from '../client';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit{

  client: Client=new Client();

  constructor(private clientService:ClientService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  saveClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
      console.log(data);
      this.goToClientlist();
    },
    error=> console.log(error));
  }

  goToClientlist()
  {
    this.router.navigate(['client']);
  }
  
  onSubmit()
  {
console.log(this.client);
this.saveClient();
  }

}
