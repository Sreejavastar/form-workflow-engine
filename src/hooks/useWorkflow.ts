import { useState } from "react";
import { WorkflowStatus } from "../engine/types";
import { runWorkflow } from "../engine/engine";
import { formConfig } from "../config/formConfig";
import type { WorkflowState } from "../engine/types";
import { workflowReducer } from "../engine/stateMachine";

const initialState: WorkflowState = {
  currentStepIndex: 0,
  data: {},
  status: WorkflowStatus.IDLE,
};

export function useWorkflow() {
  const [state, setState] = useState<WorkflowState>(initialState);

  async function next() {
  const step = formConfig[state.currentStepIndex];

  setState((prev) =>
    workflowReducer(prev, { type: "NEXT" })
  );

  const finalState = await runWorkflow(state, { type: "NEXT" }, step);

  // 3️⃣ update state with result
  setState(finalState);
}

  function retry() {
  setState((prev) => ({
    ...prev,
    status: WorkflowStatus.IDLE,
    error: undefined,
  }));
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
