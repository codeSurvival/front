import { Injectable } from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiCommonService} from './http/api-common.service';
import {SessionDTO} from '../../shared/dtos/sessions/session-dto';
import {UserRegisterDto} from '../../shared/dtos/users/user-register-dto';
import {UserLoginDto} from '../../shared/dtos/users/user-login-dto';
import {UserToken} from '../../shared/models/users/user-token';
import {ConnectedUserResponse} from '../../shared/models/users/connected-user-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private apiCommonService: ApiCommonService) {
  }

  private servicesUrl = environment.services_url;

  private tokenKey = environment.localStorageTokenIdentifier;

  public static getAuthUId(): number {
    return Number(localStorage.getItem('AuthUserId'));
  }

  public clearLocalUserToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }


  isAuthenticated(): Observable<boolean> {
    return this.http.get<ConnectedUserResponse>(`${this.servicesUrl}/users/me`, {observe: 'response'})
      .pipe(
        map(res => res.ok),
        catchError(err => of(false))
      );
  }

  signUp(user: UserRegisterDto): Observable<any> {
    return this.http.post(`${this.servicesUrl}/users/registration`, user);
  }

  login(user: UserLoginDto): Observable<ConnectedUserResponse> {
    return this.http.post<UserToken>(`${this.servicesUrl}/users/authentication`, user).pipe(
      switchMap(token => {
        this.setToken(token.token);
        return this.getLoggedUser();
      })
    );
  }

  getLoggedUser(): Observable<ConnectedUserResponse> {
    return this.http.get<ConnectedUserResponse>(`${this.servicesUrl}/users/me`).pipe(
      catchError(err => EMPTY)
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
