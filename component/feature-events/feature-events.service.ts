import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureEventsService {

  constructor(private http:HttpClient) { }
   getEvents(token: string): Observable<any> { // Add token parameter
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
      return this.http.post('/api/super-admin/v1/secure/featuredevent/data-table', body, { headers }); // Include headers and body in the request
    }
    addEvent(fEvent: any,token:string): Observable<any> { // Add token parameter
      const headers = new HttpHeaders({
        'Tokenkey': `${token}` // Set the token in the headers
      });
      
  
      return this.http.post('/api/super-admin/v1/secure/featuredevent/add', fEvent, { headers }); // Include headers and body in the request
    }
  deleteEvent(id:string,token:string){
    const headers = new HttpHeaders({
      'Tokenkey': `${token}` // Set the token in the headers
    });
  
    console.log({headers});
    return this.http.delete(`/api/super-admin/v1/secure/featuredevent/delete/${id}`,  { headers }); // Include headers and body in the request
  
  }
  getEvent(id:string,token:string){
  const headers=new HttpHeaders({
    'Tokenkey':`${token}`
  })
  return this.http.get(`/api/super-admin/v1/secure/featuredevent/get/${id}`,{headers})
  }
  updateEvent(id:any, fEvent:any,token:string){
    const headers = new HttpHeaders({
      'Tokenkey': `${token}`
    });
    
    return this.http.put(`/api/super-admin/v1/secure/featuredevent/update/${id}`, fEvent, { headers });
  
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
