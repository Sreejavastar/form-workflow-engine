// Workflow lifecycle states (erasable-safe)
export const WorkflowStatus = {
  IDLE: "IDLE",
  VALIDATING: "VALIDATING",
  ERROR: "ERROR",
  SAVED: "SAVED",
  COMPLETED: "COMPLETED",
} as const;

export type WorkflowStatus =
  (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

// Supported field types
export type FieldType = "text" | "email" | "number" | "phone";

// Field contract
export interface FieldConfig {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

// Step contract
export interface StepConfig {
  id: string;
  title: string;
  fields: FieldConfig[];
}

// Validation result contract
export interface ValidationResult {
  valid: boolean;
  message?: string;
}

// Workflow state
export interface WorkflowState {
  currentStepIndex: number;
  data: Record<string, unknown>; 
  status: WorkflowStatus;
  error?: string;
}
