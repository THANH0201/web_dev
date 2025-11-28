## Iteration4: 
- Q: Consider whether you also want the backend to validate this (e.g., in the signup controller). Briefly justify your decision in a short note (for example, in README.md or as a comment in the code).
- A: Yes — validate on both frontend and backend: 
    - Frontend validation is important for user experience (immediate feedback, fewer round trips).
    - Backend validation is required for security and data integrity. Client-side checks can be bypassed or omitted by malicious clients or by other non-browser clients consuming the API. The server must never trust incoming data.
    - The backend is the single source of truth for business rules and must therefore enforce critical checks such as matching passwords and password strength. 

## Iteration 6:
### 1.Compare this version of the loginUser controller to the one used in Iterations 1–5 (in the backend folder).

| Aspect            | Model-Based Approach                          | Controller-Centric Approach                  |
|-------------------|-----------------------------------------------|----------------------------------------------|
| **Logic Location** | Defined in the model (`User.login`)           | Written directly inside the controller        |
| **Controller Complexity** | Simple and concise, delegates to model | Longer, contains all validation and checks    |
| **Reusability**   | Logic reusable across different controllers   | Limited, tied to this controller only         |
| **Readability**   | Controller is clean, but details hidden in model | Easy to see logic, but bulky and harder to follow |
| **Maintainability** | Easier to update by changing model methods   | Harder to refactor, changes must be repeated in controllers |
| **Separation of Concerns** | Clear: model handles data logic, controller orchestrates | Mixed: controller handles both orchestration and logic |

---
### 2. Analysis of Login Approaches

- Purpose of `userSchema.statics.login` in `userModel.js`
    There is no `userSchema.statics.login` in `userModel.js` in backend-v2
---

- Comparing `User.findOne({ email })` vs. `this.findOne({ email })`
    - Use `this.findOne` inside model methods for flexibility, and `User.findOne` outside the model when directly accessing it.

---

- Why is `bcrypt` imported in `userController.js` and not in `userModel.js` in this version?
    - The import location reflects **where the logic resides**:  
        - **Model-based** → `bcrypt` in the model.  
        - **Controller-centric** → `bcrypt` in the controller.

---

### 3. Discuss which approach you plan to use for your project and explain why.
- We will use model-based refactoring: logic encapsulated in static methods inside models. Because it keeps controllers clean, makes logic reusable, and improves maintainability.

---

## Iteration 7:
### 1. Compare this version of the signupUser controller to the one used in Iterations 1–5 (in the backend folder).
| Aspect | Controller-Centric Design (A) | Model-Based Refactoring (B) |
|--------|-------------------------------|-----------------------------|
| Logic location | All validation, uniqueness check, hashing and creation happens in the controller. `password2` not present in this version. | Controller is thin; `User.signup(email, password, password2)` encapsulates validation, password confirmation, hashing and creation. |
| Parameters expected | `{ email, password }` — controller must parse and validate all fields. | `{ email, password, password2 }` — model is expected to validate `password2` match and other rules. |
| Validation responsibilities | Controller is responsible for presence, email format, password strength, uniqueness. | Model is responsible for presence, format, strength, password confirmation, uniqueness. Controller only handles request/response. |
| Password confirmation (`password2`) | Not handled in this snippet — would need to be added to controller for confirmation. | `password2` is passed to the model; the model should check `password === password2`. |
| Readability | Logic is explicit in controller; easy to audit without opening other files, but the controller is bulky. | Controller is concise and readable; you must open the model to see validation details. |
| Reusability | Low: logic tied to this controller; other code creating users must duplicate or call controller logic. | High: `User.signup` can be reused by other controllers, scripts, tests. |
| Maintainability | Harder: to change signup rules you modify controller code; changes must be repeated if multiple controllers exist. | Easier: change logic in one model method and all callers benefit. |
| Testability | Controller tests must cover many behaviors and mock DB/hashing; unit tests may be more involved. | Model can be unit-tested independently; controller tests become simpler (mock model). |
| Error consistency | Controller must manually ensure consistent error messages and formats for all checks. | Centralized error messages from model improve consistency across endpoints. |
| Duplication risk | High — validation/hashing code may be duplicated across controllers or scripts. | Low — single source of truth reduces duplication. |
| Coupling | Controller couples to validators, bcrypt, and data-access patterns. | Controller only couples to model API; model couples to validators and bcrypt. |
| Security | Secure if implemented correctly, but higher risk of missing checks if multiple controllers exist. | More secure in practice because invariants are enforced centrally; reduces risk of inconsistent checks. |
| Ideal use case | Small prototypes or when you want explicit, easily visible logic in controller for learning/quick audits. | Medium+ projects, when signup/login logic must be reused and kept consistent; preferred for maintainability and DRY code. |
| `password2` best practice | If using controller-centric design, add `password2` checks in controller before creating user. | If using model-based design, ensure `User.signup` validates `password2` and throws clear errors; frontend still does immediate `password === password2` check for UX. |

---
### 2. Analysis of Login Approaches

- What is the purpose of `userSchema.statics.signup` in `userModel.js`
    - There is no `userSchema.statics.signup` in `userModel.js` in backend-v2

- Compare `User.create({ email, password: hash })` to `this.create({ email, password: hash })`. When and why do we use this instead of the model's name?
    - `User.create(...)` calls the model constructor exported/required as User and uses it directly.
    - `this.create(...)` is used inside a schema static or instance method where this is bound to the model (or the document). Use this inside model methods/statics because it refers to the correct model at runtime and is more robust (works with discriminators, avoids certain circular-require patterns, and makes the model code reusable).

- Why is `validator` imported in `userController.js` and not in `userModel.js` in this version?
    - - The import location reflects **where the logic resides**:  
        - **Model-based** → `validator` in the model.  
        - **Controller-centric** → `validator` in the controller.

---

### 3. Discuss which approach you plan to use for your project and explain why.
- We will use model-based refactoring: logic encapsulated in static methods inside models. Because it keeps controllers clean, makes logic reusable, and improves maintainability.

---

