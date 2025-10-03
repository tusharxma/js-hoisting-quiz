# ⚡ JavaScript Hoisting & Temporal Dead Zone (var vs let vs const)

This project demonstrates **how variables behave differently** when declared with `var`, `let`, and `const` in JavaScript.  
The examples are written in `index.js` and explained in detail for better understanding.

---

## 🎯 Project Goal
- Understand **hoisting** in JavaScript.
- Learn about the **Temporal Dead Zone (TDZ)** with `let` and `const`.
- Compare `var`, `let`, and `const` side by side.
- Build a strong foundation for interviews and real-world coding.

---

## 📂 Project Structure

```
js-hoisting-demo/
│── index.js # Code examples (var, let, const side by side)
│── README.md # Documentation (this file)
```


---

## 🧑‍💻 Code Overview

### 🔹 var Example
```
js 

varFunction();

function varFunction() {
    console.log(varVariable); // Output: undefined
    var varVariable = "I am a var variable";   
    console.log(varVariable); // ✅ "I am a var variable"
}
```

## Why undefined?

- var is hoisted and initialized with undefined.
- The variable exists in memory before its declaration, so accessing it returns undefined.

🔹 let Example
```
  letFunction();

  function letFunction() {
      console.log(letVariable); // ❌ ReferenceError
      let letVariable = "I am a let variable";
      console.log(letVariable); // ✅ "I am a let variable"
  }
```

🔹 Why ReferenceError?

- let is hoisted but not initialized.
- It stays in the Temporal Dead Zone (TDZ) until its declaration line is executed.
- Accessing it before that → ReferenceError.

🔹 const Example
```

constFunction();

function constFunction() {
    console.log(constVariable); // ❌ ReferenceError
    const constVariable = "I am a const variable";
    console.log(constVariable); // ✅ "I am a const variable"
}
```

🔹 Why ReferenceError?

- const behaves like let: hoisted but uninitialized.
- Also, it must be initialized at declaration.
- Accessing it before initialization → ReferenceError.


## 📊 Comparison Table

| Keyword   | Hoisted? | Initialized?       | Before Initialization |
| --------- | -------- | ------------------ | --------------------- |
| **var**   | ✅ Yes    | ✅ `undefined`      | Prints `undefined`    |
| **let**   | ✅ Yes    | ❌ (TDZ)            | ❌ ReferenceError      |
| **const** | ✅ Yes    | ❌ (TDZ, must init) | ❌ ReferenceError      |


---- var Example ----
undefined
I am a var variable

---- let Example ----
Error: Cannot access 'letVariable' before initialization
I am a let variable

---- const Example ----
Error: Cannot access 'constVariable' before initialization
I am a const variable

---



## 📝 JavaScript Hoisting Quiz (CLI Project)

A simple **Command Line Quiz App** built with Node.js to test your knowledge of **JavaScript Hoisting, var/let/const, and TDZ (Temporal Dead Zone).**

## 📂 Project Structure

js-hoisting-quiz/
│── index.js # Main quiz logic
│── question.js # Quiz questions
│── README.md # Documentation


---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository
bash 
```
git clone https://github.com/your-username/js-hoisting-quiz.git
cd js-hoisting-quiz
```

2️⃣ Install Node.js

Make sure you have Node.js installed.
Check version:
```
 node -v
```
(Recommended: Node 14+)

3️⃣ Run the Quiz
```
 node index.js
```

Q1: What will this print?
console.log(a); var a = 10;
1. 10
2. undefined
3. ReferenceError
4. null
Your answer (number): 2
✅ Correct!

Q2: What happens with let before initialization?
1. undefined
2. ReferenceError
3. null
4. NaN
Your answer (number): 2
✅ Correct!

Quiz Over! Your score: 2/2
