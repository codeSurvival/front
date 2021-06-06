import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiCommonService} from './api-common.service';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LanguageResponse} from '../../../shared/models/languages/language-response';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private servicesUrl = environment.services_url;

  constructor(private http: HttpClient, private apiCommonService: ApiCommonService) {  }


  getLanguages(): Observable<LanguageResponse[]> {
    return this.http.get<LanguageResponse[]>(`${this.servicesUrl}/languages`).pipe(
      catchError(err => of([]))
    );
  }

}
