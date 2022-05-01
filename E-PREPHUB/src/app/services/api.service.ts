import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/posts/';

  addCoaching(data: any) {
    return this.http.post<any>(this.url, data);
  }
}
