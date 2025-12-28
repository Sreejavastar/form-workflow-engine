import type { StepConfig, ValidationResult } from "./types";

export function validateStep(
  step: StepConfig,
  data: Record<string, unknown>
): ValidationResult {
  for (const field of step.fields) {
    if (field.required) {
      const value = data[field.id];
      if (!value) {
        return {
          valid: false,
          message: `${field.label} is required`,
        };
      }
    }
  }

  return { valid: true };
}
