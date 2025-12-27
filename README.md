I am building a config-driven multi-step form workflow engine that demonstrates frontend system thinking: state machines, async validation, failure handling, and scalability.
<img width="1292" height="769" alt="image" src="https://github.com/user-attachments/assets/de3ca3f0-5e45-4b0c-9066-df7ae7a55ad2" />

Big Picture: What are we actually building?

We are NOT building:
->a form
->a simple React app
We are building a Frontend Workflow Engine.
That means:
A reusable system that can run any multi-step process (onboarding, loan application, signup, survey) without rewriting logic.

The UI is just a viewer.
The engine is the brain.🧠

The core problem we are solving (real-world)
In real companies, forms fail because:
i. State is scattered
ii. Validation is inconsistent
iii. Edge cases break flows
iv. Changes are risky

Example failure:
User refreshes → data lost
API fails → UI stuck
Step order changes → code breaks

<img width="536" height="300" alt="image" src="https://github.com/user-attachments/assets/a5e89b95-f3f9-49f9-9a14-c88ccb701694" />


Lets Solve this problem. Shall we?
