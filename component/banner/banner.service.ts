import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }

  getAllBanners(token:string):Observable<any>{
const headers= new HttpHeaders({
  'Tokenkey':`${token}`
})
const body={
  "length": "100",
  "start": "0",
  "search_value": "",
  "order_on": "1",
  "order_by": "desc",
  "draw": "1"
};
console.log({headers,body})
return this.http.post('/api/super-admin/v1/secure/banner/data-table',body,{headers})
}
bannerUpload(token: string, file: File): Observable<any> {
  const formData = new FormData();
  formData.append('picture', file);

  const headers = new HttpHeaders({
    'Tokenkey': `${token}`
  });

  return this.http.post('/api/super-admin/v1/secure/common/image/upload', formData, { headers });
}
addBanner(bannerObj:any,token:string){
const headers= new HttpHeaders({
  'Tokenkey':`${token}`
})
return this.http.post('/api/super-admin/v1/secure/banner/add',bannerObj,{headers})

}
getBanner(id:any,token:any){
const headers=new HttpHeaders({
  'Tokenkey':`${token}`
})
return this.http.get(`/api/super-admin/v1/secure/banner/get/${id}`,{headers})
}
deleteBanner(id:any,token:string){
  const headers= new HttpHeaders({
    'Tokenkey':`${token}`
  })
  return this.http.delete(`/api/super-admin/v1/secure/banner/delete/${id}`,{headers})
  
  }
updateBanner(id:any,bannerObjUp:any,token:string){
const headers=new HttpHeaders({
  'Tokenkey':`${token}`
})
return this.http.put(`/api/super-admin/v1/secure/banner/update/${id}`,bannerObjUp,{headers})
}

}
