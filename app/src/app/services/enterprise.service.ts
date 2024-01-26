import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Enterprise } from "../interfaces/enterprise";

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}  

  getAll() {}

  getById() {}

  getByName() {}

  getTotalsByEnterprise() {}

  getEnterprisesByCompany(id: number): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${this.apiUrl}/clients/${id}/enterprises`).pipe(
      catchError((error) => {
         console.error('Fail to get enterprises', error);
         return throwError('Fail to get enterprises');
      })
     );
  }
}
