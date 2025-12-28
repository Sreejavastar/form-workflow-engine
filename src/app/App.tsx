import { formConfig } from "../config/formConfig";
import { useWorkflow } from "../hooks/useWorkflow";
import { StepRenderer } from "../components/StepRenderer";
import { WorkflowStatus } from "../engine/types";

function App() {
  const { state, next, retry, updateField } = useWorkflow();
  const currentStep = formConfig[state.currentStepIndex];

  if (!currentStep) {
    return <h2>Workflow Completed</h2>;
  }

  return (
    <div>
      <StepRenderer step={currentStep} onChange={updateField} />

      {state.status === WorkflowStatus.ERROR && (
        <div>
          <p>{state.error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}

      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
