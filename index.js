// console.log(varibaleWithVar) // Output: Undefined
var varibaleWithVar = "This is a variable declared with var";
//console.log(varibaleWithVar) // Output: This is a variable declared with var


//console.log("🚀 ~ variableWithConst:", variableWithConst) // Referrence Error
const variableWithConst = "This is a variable declared with const";
//console.log("🚀 ~ variableWithConst:", variableWithConst) // This is a variable declared with const


// console.log("🚀 ~ variableWithLet:", variableWithLet) // Referrence Error
let variableWithLet = "This is a variable declared with let";
// console.log("🚀 ~ variableWithLet:", variableWithLet) // This is a variable declared with let




// Can you try writing one function with var and one with let side by side in your project, log their outputs, and add a comment explaining the difference? 

// ------------------ var Example ------------------
// varFunction();

function varFunction() {
    console.log(varVariable); 
    // Output: undefined
    // Why? 
    // Because 'var' is hoisted AND initialized with 'undefined'.
    // During compilation, varVariable is allocated memory
    // and automatically set to undefined.
    
    var varVariable = "I am a var variable";   
    console.log(varVariable); // "I am a var variable"
}

// ------------------ let Example ------------------
// letFunction();

function letFunction() {
    console.log(letVariable); 
    // ❌ ReferenceError
    // Why?
    // 'let' is hoisted but NOT initialized.
    // During compilation, letVariable is allocated memory
    // but stays in the Temporal Dead Zone (TDZ)
    // until the actual declaration line is executed.
    
    let letVariable = "I am a let variable";
    console.log(letVariable); // "I am a let variable"
}


// constFuction();

function constFuction() {
    console.log(constVariable); 
    // ❌ ReferenceError
    // Why?
    // 'const' is hoisted but NOT initialized.
    // During compilation, constVariable is allocated memory
    // but stays in the Temporal Dead Zone (TDZ)
    // until the actual declaration line is executed.
    
    const constVariable = "I am a const variable";
    console.log(constVariable); // "I am a const variable"
}

// Quuiz Project 

const readline = require("readline"); // readline is a Node built-in module for interactive CLI input/output.
const questions = require("./question.js");  // require("./question.js") loads whatever question.js exports (expected: an array of question objects).

const rl = readline.createInterface({ // Creates the rl interface object:
  input: process.stdin, // input: process.stdin — read from keyboard/terminal.
  output: process.stdout // output: process.stdout — write prompts to terminal.
}); 

let score = 0; // score tracks correct answers.
let current = 0; // current is the index of the current question.
// Both are let because they change. 

function askQuestion() {
  if (current < questions.length) { // If there are still questions, read the current q.
    const q = questions[current];
    console.log(`\nQ${current + 1}: ${q.question}`); // Print question text and each option, prefixed with numbers 1. 2. ....
    q.options.forEach((opt, idx) => console.log(`${idx + 1}. ${opt}`));

    rl.question("Your answer (number): ", (input) => { // rl.question displays the prompt and waits asynchronously for user input. The callback runs when the user presses Enter.
        const index = parseInt(input.trim(), 10) - 1;

        if (!Number.isFinite(index) || index < 0 || index >= q.options.length) {
            console.log("❌ Invalid input. Please enter a number for the options.");
            return askQuestion(); // re-ask the same question
        }

        if (q.options[index] === q.answer) {// parseInt(input) - 1 converts the number the user typed to a zero-based index. The code compares the chosen option string (q.options[index]) to q.answer.
            console.log("✅ Correct!"); 
            score++;
        } else {
            console.log(`❌ Wrong! Correct answer: ${q.answer}`);
        }
        current++;
        askQuestion(); // After responding, current++ and askQuestion() is called again (recursion via async callback).
        //If current equals or exceeds the number of questions, print final score and close the rl interface.
        // askQuestion() starts the whole process.
    });
  } else {
    console.log(`\nQuiz Over! Your score: ${score}/${questions.length}`);
    rl.close();
  }
}

askQuestion();