import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from './conta.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  private readonly API = 'http://localhost:3000/contas/signup'

  constructor(private http: HttpClient) { }
  
 
 createAccount(): Observable<Conta[]>{
      return this.http.post<Conta[]>('teste', this.API)
 }
   
}
