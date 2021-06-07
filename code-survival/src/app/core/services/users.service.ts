import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {ConnectedUserResponse} from '../../shared/models/users/connected-user-response';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  private servicesUrl = environment.services_url;

  getUsersList(): Observable<ConnectedUserResponse[]> {
    return this.http.get<ConnectedUserResponse[]>(`${this.servicesUrl}/users`).pipe(
    catchError(err => of([])));
  }

  removeUser(id: string): Observable<any>{
    return this.http.delete(`${this.servicesUrl}/remove/${id}`).pipe(
      catchError(err => of([]))
    );
  }
}
