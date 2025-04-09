import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdcastService {

  constructor(private http: HttpClient) { }
  getAllProdcasts(token: string): Observable<any> { 
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` 
    });
    
    const body = {
      "length": "100",
      "start": "0",
      "search_value": "",
      "order_on": "1",
      "order_by": "desc",
      "draw": "1"
    };

    console.log({headers, body});
    return this.http.post('/api/super-admin/v1/secure/prodcast/data-table', body, { headers }); // Include headers and body in the request
  }
  addProdcasts(prodcast: any,token:string): Observable<any> { // Add token parameter
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` // Set the token in the headers
    });
    

    return this.http.post('/api/super-admin/v1/secure/prodcast/add', prodcast, { headers }); // Include headers and body in the request
  }
deleteProdcast(id:string,token:string){
  const headers = new HttpHeaders({
    'Tokenkey': `${token}` // Set the token in the headers
  });

  console.log({headers});
  return this.http.delete(`/api/super-admin/v1/secure/prodcast/delete/${id}`,  { headers }); // Include headers and body in the request

}
getProdcast(id:string,token:string){
const headers=new HttpHeaders({
  'Tokenkey':`${token}`
})
return this.http.get(`/api/super-admin/v1/secure/prodcast/get/${id}`,{headers})
}
updateProdcast(id:any, token:string, announce:any){
  const headers = new HttpHeaders({
    'Tokenkey': `${token}`
  });
  
  return this.http.put(`/api/super-admin/v1/secure/prodcast/update/${id}`, announce, { headers });

}
uploadImage(token: string, file: File): Observable<any> {
  const formData = new FormData();
  formData.append('picture', file);

  const headers = new HttpHeaders({
    'Tokenkey': `${token}`
  });

  return this.http.post('/api/super-admin/v1/secure/common/image/upload', formData, { headers });
}
}
