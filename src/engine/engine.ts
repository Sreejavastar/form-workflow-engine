import { workflowReducer} from "./stateMachine";
import type { WorkflowAction } from "./stateMachine";
import { validateStepAsync } from "./validator";
import type { WorkflowState } from "./types";
import type { StepConfig } from "./types";

export async function runWorkflow(
  state: WorkflowState,
  action: WorkflowAction,
  step?: StepConfig
): Promise<WorkflowState> {
  if (action.type === "NEXT" && step) {
    const validating = workflowReducer(state, { type: "NEXT" });
    const result = await validateStepAsync(step, state.data);


  if (!result.valid) {
    return workflowReducer(validating, {
      type: "VALIDATION_FAILURE",
      error: result.message || "Validation failed",
    });
  }

  const saved = workflowReducer(validating, { type: "VALIDATION_SUCCESS",
   });
  return workflowReducer(saved, { type: "NEXT" });
}

  return workflowReducer(state, action);
}
