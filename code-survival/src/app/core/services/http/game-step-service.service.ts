import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiCommonService} from './api-common.service';
import {EMPTY, Observable} from "rxjs";
import {Level} from "../../../shared/models/levels/level";
import {catchError} from "rxjs/operators";
import {CompilationStepDto} from "../../../shared/dtos/sse/compilation-step-dto";

@Injectable({
  providedIn: 'root'
})
export class GameStepServiceService {

  private servicesUrl = environment.services_url;

  constructor(private http: HttpClient, private apiCommonService: ApiCommonService) {  }



}
