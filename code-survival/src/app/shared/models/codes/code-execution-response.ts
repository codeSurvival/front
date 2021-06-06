import {FailedConstraintResponse} from './failed-constraint-response';

export interface CodeExecutionResponse {
  success: boolean;
  failedConstraints: FailedConstraintResponse[];
}
