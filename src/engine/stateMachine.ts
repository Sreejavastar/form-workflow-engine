import { WorkflowStatus } from "./types";
import type { WorkflowState } from "./types";

export type WorkflowAction =
  | { type: "NEXT" }
  | { type: "PREVIOUS" }
  | { type: "VALIDATION_START" }
  | { type: "VALIDATION_SUCCESS" }
  | { type: "VALIDATION_FAILURE"; error: string }
  | { type: "RESET" };

export function workflowReducer(
  state: WorkflowState,
  action: WorkflowAction
): WorkflowState {
  switch (state.status) {
    case WorkflowStatus.IDLE:
      if (action.type === "NEXT") {
        return { ...state, status: WorkflowStatus.VALIDATING };
      }
      return state;

    case WorkflowStatus.VALIDATING:
      if (action.type === "VALIDATION_SUCCESS") {
        return { ...state, status: WorkflowStatus.SAVED };
      }
      if (action.type === "VALIDATION_FAILURE") {
        return { ...state, status: WorkflowStatus.ERROR, error: action.error };
      }
      return state;

    case WorkflowStatus.ERROR:
      if (action.type === "VALIDATION_START") {
        return { ...state, status: WorkflowStatus.VALIDATING, error: undefined };
      }
      if (action.type === "RESET") {
        return { ...state, status: WorkflowStatus.IDLE, error: undefined };
      }
      return state;

    case WorkflowStatus.SAVED:
      if (action.type === "NEXT") {
        return {
          ...state,
          status: WorkflowStatus.IDLE,
          currentStepIndex: state.currentStepIndex + 1,
        };
      }
      return state;

    case WorkflowStatus.COMPLETED:
      return state;

    default:
      return state;
  }
}
