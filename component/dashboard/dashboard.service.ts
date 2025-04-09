import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getUserData(token: string): Observable<any> { // Add token parameter
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` // Set the token in the headers
      
    });
    console.log({headers})
    return this.http.get('/api/super-admin/v1/secure/dashboard', { headers }); // Include headers in the request
  }
}
