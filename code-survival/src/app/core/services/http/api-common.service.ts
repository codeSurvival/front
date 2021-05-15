import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {


  constructor(private http: HttpClient) {
  }



  public createAndLocate<T>(url: string, body: T ): Observable<string | null> {
    return this.http.post(url, body, {observe: 'response'}).pipe(
      map(value => value.headers.get('location'))
    );
  }


}
