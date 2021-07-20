import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {EMPTY, Observable, of} from 'rxjs';
import {ConnectedUserResponse} from '../../shared/models/users/connected-user-response';
import {catchError} from 'rxjs/operators';
import {LightLevel} from '../../shared/models/levels/light-level';
import {UserRegisterDto} from '../../shared/dtos/users/user-register-dto';
import {Level} from '../../shared/models/levels/level';
import {LevelCreateDto} from '../../shared/dtos/levels/level-create-dto';
import {Constraint} from '../../shared/models/levels/constraint';
import {Regex} from '../../shared/models/levels/regex';
import {RegexCreateDto} from '../../shared/dtos/levels/regex-create-dto';
import {LevelConstraintsResponse} from '../../shared/dtos/levels/light-constraint-response';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor(private http: HttpClient) {
  }

  private servicesUrl = environment.services_url;

  getLevels(): Observable<LightLevel[]> {
    return this.http.get<LightLevel[]>(`${this.servicesUrl}/levels`).pipe(
      catchError(err => of([])));
  }


  getLevel(id: number): Observable<Level> {
    return this.http.get<Level>(`${this.servicesUrl}/levels/${id}?complete=1`).pipe(
      catchError(err => EMPTY)
    );
  }

  getActiveConstraintsByLevelId(id: number): Observable<LevelConstraintsResponse> {
    return this.http.get<LevelConstraintsResponse>(`${this.servicesUrl}/levels/${id}/constraints`).pipe(
      catchError(err => EMPTY)
    );
  }

  update(level: LightLevel): Observable<any> {
      return this.http.post(`${this.servicesUrl}/levels/` + level.ordinalValue, new CreateLevelDto(level.turnObjective));
  }

  save(level: CreateLevelDto): Observable<any> {
    return this.http.post(`${this.servicesUrl}/levels`, level);
  }

  saveConstraint(levelId: number, constraint: Constraint): Observable<any> {
    return this.http.post(
      `${this.servicesUrl}/levels/${levelId}/constraints` + (constraint.id == null ? '' : `/${constraint.id}`),
      constraint);
  }

  saveRegex(levelId: number, constraintId: string, regex: RegexCreateDto, regexId: string | null): Observable<any> {
    const url = `${this.servicesUrl}/levels/${levelId}/constraints/${constraintId}/regex` + (regexId == null ? '' : `/${regexId}`);
    console.log(url);
    return this.http.post(
      url,
      regex);
  }
}

export class CreateLevelDto{
  turnObjective: number;

  constructor(turnObjective: number) {
    this.turnObjective = turnObjective;
  }
}
