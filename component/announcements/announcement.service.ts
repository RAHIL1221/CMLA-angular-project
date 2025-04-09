import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) {}
  
  getAnnouncements(token: string): Observable<any> { // Add token parameter
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` // Set the token in the headers
    });
    
    const body = {
      "length": "100",
      "start": "0",
      "search_value": "",
      "order_on": "3",
      "order_by": "desc",
      "draw": "1"
    };

    console.log({headers, body});
    return this.http.post('/api/super-admin/v1/secure/announcement/data-table', body, { headers }); // Include headers and body in the request
  }
  addAnnouncements(announce: any,token:string): Observable<any> { // Add token parameter
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` // Set the token in the headers
    });
    

    return this.http.post('/api/super-admin/v1/secure/announcement/add', announce, { headers }); // Include headers and body in the request
  }
deleteAnnouncement(id:string,token:string){
  const headers = new HttpHeaders({
    'Tokenkey': `${token}` // Set the token in the headers
  });

  console.log({headers});
  return this.http.delete(`/api/super-admin/v1/secure/announcement/delete/${id}`,  { headers }); // Include headers and body in the request

}
getAnnounce(id:string,token:string){
const headers=new HttpHeaders({
  'Tokenkey':`${token}`
})
return this.http.get(`/api/super-admin/v1/secure/announcement/get/${id}`,{headers})
}
updateAnnouncement(id:any, token:string, announce:any){
  const headers = new HttpHeaders({
    'Tokenkey': `${token}`
  });
  
  return this.http.put(`/api/super-admin/v1/secure/announcement/update/${id}`, announce, { headers });

}

}
