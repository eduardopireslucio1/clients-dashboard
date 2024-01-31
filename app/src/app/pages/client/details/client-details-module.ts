import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClientDetailsComponent } from '../details/client-details-component';
import { ClientService } from '../../../services/client.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EnterpriseService } from 'src/app/services/enterprise.service';

export const ClientDetailsRoutes: Routes = [
  {
    path: 'client/:id',
    component: ClientDetailsComponent
  }
];

@NgModule({
  declarations: [ClientDetailsComponent],
  providers: [ClientService, EnterpriseService],
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule], 
})

export class ClientDetailsModule {
  
}
