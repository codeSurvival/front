import {FailedConstraintResponse} from './failed-constraint-response';

export interface CodeExecutionResponse {
  rulesSuccess: boolean;
  failedConstraints: FailedConstraintResponse[];
  similaritySuccess: boolean;
}
