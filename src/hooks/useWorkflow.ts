import { useState } from "react";
import { WorkflowStatus } from "../engine/types";
import { runWorkflow } from "../engine/engine";
import { formConfig } from "../config/formConfig";
import type { WorkflowState } from "../engine/types";

const initialState: WorkflowState = {
  currentStepIndex: 0,
  data: {},
  status: WorkflowStatus.IDLE,
};

export function useWorkflow() {
  const [state, setState] = useState<WorkflowState>(initialState);

  function next() {
    const step = formConfig[state.currentStepIndex];
    setState((prev) => runWorkflow(prev, { type: "NEXT" }, step));
  }

  function retry() {
    setState((prev) =>
      runWorkflow(prev, { type: "VALIDATION_START" })
    );
  }

  function updateField(id: string, value: unknown) {
  setState((prev) => ({
    ...prev,
    data: {
      ...prev.data,
      [id]: value,
    },
  }));
  }


  return {
    state,
    next,
    retry,
    updateField,

  };
}
