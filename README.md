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

Designing the System⛑️

🧠 Layer 1 — Contracts (WHAT exists)
Defines:
What states are allowed
What a step looks like
What a field looks like
👉 This is types.ts


⚙️ Layer 2 — State Machine (HOW it behaves)
Defines:
Which state can go to which
What happens on NEXT / ERROR / RETRY
👉 This is stateMachine.ts


🧩 Layer 3 — Engine (WHO controls the flow)
Defines:
When validation runs
When state updates
When data is saved
👉 This is engine.ts


🔌 Layer 4 — Hook (HOW UI talks to system)
Defines:
Simple API for components
Hide complexity
👉 This is useWorkflow.t

🎨 Layer 5 — UI (HOW it looks)
Pure rendering
