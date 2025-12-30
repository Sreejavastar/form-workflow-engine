import type { StepConfig, ValidationResult } from "./types";

export async function validateStepAsync(
  step: StepConfig,
  data: Record<string, unknown>
): Promise<ValidationResult> {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 800));

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

    // fake backend rule
    if (field.id === "email" && data[field.id] === "test@test.com") {
      return {
        valid: false,
        message: "Email already exists",
      };
    }
  }

  return { valid: true };
}
