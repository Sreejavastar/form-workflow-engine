import { workflowReducer} from "./stateMachine";
import type { WorkflowAction } from "./stateMachine";
import { validateStep } from "./validator";
import type { WorkflowState } from "./types";
import type { StepConfig } from "./types";

export function runWorkflow(
  state: WorkflowState,
  action: WorkflowAction,
  step?: StepConfig
): WorkflowState {
  if (action.type === "NEXT" && step) {
  const result = validateStep(step, state.data);

  const validating = workflowReducer(state, { type: "NEXT" });

  if (!result.valid) {
    return workflowReducer(validating, {
      type: "VALIDATION_FAILURE",
      error: result.message || "Validation failed",
    });
  }

  const saved = workflowReducer(validating, { type: "VALIDATION_SUCCESS" });
  return workflowReducer(saved, { type: "NEXT" });
}

  return workflowReducer(state, action);
}
