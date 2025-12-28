import type { StepConfig } from "../engine/types";

export const formConfig: StepConfig[] = [
  {
    id: "personal-info",
    title: "Personal Information",
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
    ],
  },
  {
    id: "contact-info",
    title: "Contact Details",
    fields: [
      {
        id: "phone",
        label: "Phone Number",
        type: "phone",
        required: true,
      },
    ],
  },
];
