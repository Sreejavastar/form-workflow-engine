import type { StepConfig } from "../engine/types";

interface Props {
  step: StepConfig;
  onChange: (id: string, value: string) => void;
}

export function StepRenderer({ step, onChange }: Props) {
  return (
    <div>
      <h2>{step.title}</h2>
      {step.fields.map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input
            type={field.type}
            onChange={(e) => onChange(field.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
