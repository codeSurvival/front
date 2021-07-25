import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCommonService} from './api-common.service';
import {environment} from '../../../../environments/environment';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {CodeValidationResponse} from '../../../shared/models/codes/code-validation-response';
import {CodeValidation} from '../../../shared/models/codes/code-validation';
import {CodeExecutionResponse} from "../../../shared/models/codes/code-execution-response";
import {CodeExecutionCommandDTO} from "../../../shared/dtos/code/code-execution-command-dto";
import {CompilationStepDto} from "../../../shared/dtos/sse/compilation-step-dto";

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  private servicesUrl = environment.services_url;

  constructor(private http: HttpClient, private apiCommonService: ApiCommonService) {  }

  executeCode(codeCommand: CodeExecutionCommandDTO): Observable<CodeExecutionResponse> {
    return this.http.post<CodeExecutionResponse>(`${this.servicesUrl}/code/execution`, codeCommand);
  }

  getCompilationStep(): Observable<CompilationStepDto> {
    return this.http.get<CompilationStepDto>(`${this.servicesUrl}/code/compilationStep`).pipe(
      catchError(err => EMPTY)
    );
  }
}
