import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-clientcomponent';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'client', component: ClientListComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'update-client/:id', component: UpdateClientComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },
  { path: '', redirectTo: 'user-login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
