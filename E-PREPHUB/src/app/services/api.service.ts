import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/posts';
  
  url2= ' http://localhost:3000/posts';

  url3 = '  http://localhost:3000/comments';
 
  // url = 'http://localhost:8005/PREPHUB/Login';

  addCoaching(data: any) {
    return this.http.post<any>(this.url, data);
  }

  stdLogin(data:any){
    return this.http.post<any>(this.url2, data);
  }

  coachingLog(data:any){
    return this.http.post<any>(this.url3, data);
  }

}

