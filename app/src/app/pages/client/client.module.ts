import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule], 
})
export class ClientModule {
  
}
