import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {concatAll, map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiCommonService} from './http/api-common.service';
import {SessionDTO} from '../../shared/dtos/sessions/session-dto';
import {UserRegisterDto} from '../../shared/dtos/users/user-register-dto';
import {UserLoginDto} from '../../shared/dtos/users/user-login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  private servicesUrl = environment.services_url;

  constructor(private http: HttpClient, private apiCommonService: ApiCommonService) {
  }

  public static getToken(): string | null {
    return localStorage.getItem('token');
  }

  public static getAuthUId(): number {
    return Number(localStorage.getItem('AuthUserId'));
  }

  static clearLocalUserData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('AuthUserId');
  }


  isAuthenticated(): Observable<boolean> {
    // get the token
    const sessionDTO: SessionDTO = {
      // @ts-ignore
      token: AuthenticationService.getToken(),
      userId: AuthenticationService.getAuthUId()
    };
    return new Observable(obs => this.http.post(`${this.servicesUrl}/sessions/validate`, sessionDTO, {observe: 'response'})
      .subscribe((value) => {
          return obs.next(value.status === 200);
        },
        error => {
          return obs.next(false);
        }
      ));
  }

  signUp(user: UserRegisterDto): Observable<any> {
    return this.http.post(`${this.servicesUrl}/users/registration`, user);
  }

  login(user: UserLoginDto): Observable<any> {

    return this.apiCommonService.createAndLocate<UserLoginDto>(`${this.servicesUrl}/users/authentication`, user).pipe(
      map(location => this.getSession(location ? location : '')),
      concatAll()
    );

  }

  getSession(url: string): Observable<any> {
    return this.http.get<SessionDTO>(url).pipe(
      tap(session => {
        localStorage.setItem('token', session.token);
        localStorage.setItem('AuthUserId', session.userId.toString());
      })
    );
  }
}
