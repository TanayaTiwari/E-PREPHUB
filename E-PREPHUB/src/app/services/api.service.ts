import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/posts';

  url2 = ' http://localhost:3000/posts';

  url3 = '  http://localhost:3000/comments';

  // url = 'http://localhost:8005/PREPHUB/Login';
  private readonly coachingStdRegUrl: string = 'http://localhost:8005/PREPHUB/';

  addCoaching(data: any) {
    return this.http.post<any>(this.url, data);
  }

  stdLogin(data: any) {
    return this.http.post<any>('http://localhost:8005/PREPHUB/Login', data);
  }

  coachingLog(data: any) {
    return this.http.post<any>('http://localhost:8005/PREPHUB/Login', data);
  }

  getIsLoggedIn() {
    console.log(localStorage.getItem('currentUser'));

    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  batchRegistration(data: any) {
    console.log('main===', data);
    return this.http.post<any>(
      'http://localhost:8005/PREPHUB/Batchesinfo',
      data
    );
  }

  studentRegistrationCoaching(data: any) {
    console.log(data);
    return this.http.post<any>(
      `${this.coachingStdRegUrl}StudentRegistration`,
      data
    );
  }

  // getBatchesByCourse(courseName: string) {
  //   console.log(courseName);
  //   let coachingId = this.getCoachingId();
  //   return this.http.get<any>(
  //     `${this.coachingStdRegUrl}showBatchByCoures?courseName=${courseName}&coachingId=${coachingId}`
  //   );
  // }

  getCoursesByCoachingId() {
    let coachingId = this.getCoachingId();
    console.log(coachingId);

    return this.http.get<any>(
      `${this.coachingStdRegUrl}getCoursesByCoachingId?coachingId=${coachingId}`
    );
  }

  forCourse(data: any) {
    return this.http.post<any>('http://localhost:8005/PREPHUB/Login', data);
  }

  private getCoachingId() {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }
}
