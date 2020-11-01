import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, Subject} from 'rxjs'
import {CookieService} from 'ngx-cookie'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetailsCache: Subject<any> = new Subject<any>()
  USER_URL = 'http://localhost:3000/users'

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
  }

  reisterUser(data): Observable<any> {
    return this.http.post(this.USER_URL, data)
  }

  getAuthToken(email: string, password: string): Observable<any> {
    // in reality it should only return Json token based on the email/password.
    return this.http.get(`${this.USER_URL}?user=${email}&password=${password}`, { headers: { Anonymous: 'undefined' } })
  }

  getUserDetail(token): Observable<any> {
    return this.http.get(`${this.USER_URL}?token=${token}`)
  }

  public saveToken(token) {
    if (token) {
      this.cookieService.put('creospan-token', token)
    }
  }

  public logOut() {
    this.userDetailsCache.next(null)
    this.cookieService.remove('creospan-token')
    this.cookieService.remove('creospan-user-name')
    this.router.navigate(['/login'])
  }

  public saveUserDetail(loginedInUser) {
    this.cookieService.put('creospan-user-name', loginedInUser[0].name)
  }
}
