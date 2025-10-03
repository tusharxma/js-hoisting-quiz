# 🧠 JavaScript Hoisting Quiz

This project is a **quiz-based experiment** to understand **Hoisting in JavaScript**.  
The focus is on how `var`, `let`, `const`, and functions behave differently when hoisted.

---

## 🎯 Project Goal
- Explore **hoisting behavior** of variables and functions.
- Understand **Temporal Dead Zone (TDZ)** for `let` and `const`.
- Practice interview-style examples with real output.

---

## 📂 Project Structure
``
js-hoisting-quiz/
│── index.js # Main program logic
│── README.md # Documentation (description, learnings, interview Qs)
``

---

## 🚀 Features
- Console-based **quiz game** with 2–3 questions.
- Demonstrates:
  - `var` vs `let` vs `const` hoisting.
  - TDZ errors.
  - Function declarations vs function expressions.
- Logs outputs to show differences clearly.

---

## 🧑‍💻 Code Walkthrough

### Example Snippet
```js
console.log(score); // undefined (because of var hoisting)
var score = 0;

// Uncomment and try these:
// let score = 0;   // ❌ ReferenceError (TDZ)
// const score = 0; // ❌ ReferenceError (TDZ)
