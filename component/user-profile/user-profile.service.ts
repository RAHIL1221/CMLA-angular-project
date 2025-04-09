import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private http: HttpClient) {}
  
  updateUserProfile(id: number, name: string, email: string,password:string,token:any): Observable<any> {
    const headers = new HttpHeaders({
     'Tokenkey': `${token}` // Set the token in the headers
    });
    const body = { name, email,password };
    return this.http.put(`/api/super-admin/v1/secure/admin/update/${id}`, body, { headers });
  }
}
