import { workflowReducer} from "./stateMachine";
import type { WorkflowAction } from "./stateMachine";
import type { WorkflowState } from "./types";

export function runWorkflow(
  currentState: WorkflowState,
  action: WorkflowAction
): WorkflowState {
  return workflowReducer(currentState, action);
}
