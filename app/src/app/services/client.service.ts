import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from "../interfaces/client";
import { GeneralTotals } from "../interfaces/generalTotals";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`).pipe(
      catchError((error) => {
         console.error('Fail to get clients', error);
         return throwError('Fail to get clients');
      })
     );
   }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clients/${id}`).pipe(
      catchError((error) => {
         console.error('Fail to get client', error);
         return throwError('Fail to get client');
      })
     );
  }

  getByName() {}

  getGeneralTotals(): Observable<GeneralTotals> {
    return this.http.get<GeneralTotals>(`${this.apiUrl}/clients/totalizers`).pipe(
      catchError((error) => {
         console.error('Fail to get totalizers', error);
         return throwError('Fail to get totalizers');
      })
     );
  }

  getTotalsByCompany() {}
}
