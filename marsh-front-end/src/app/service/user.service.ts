import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  reisterUser(data): Observable<any> {
    debugger;
    return this.http.post(this.USER_URL, data);
  }
}
