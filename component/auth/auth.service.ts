// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginObj:any): Observable<any> {
    
    return this.http
      .post('api/super-admin/v1/login', loginObj)

      
      
  }
}
