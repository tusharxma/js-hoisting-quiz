console.log(varibaleWithVar) // Output: Undefined
var varibaleWithVar = "This is a variable declared with var";
console.log(varibaleWithVar) // Output: This is a variable declared with var


//console.log("🚀 ~ variableWithConst:", variableWithConst) // Referrence Error
const variableWithConst = "This is a variable declared with const";
//console.log("🚀 ~ variableWithConst:", variableWithConst) // This is a variable declared with const


// console.log("🚀 ~ variableWithLet:", variableWithLet) // Referrence Error
let variableWithLet = "This is a variable declared with let";
// console.log("🚀 ~ variableWithLet:", variableWithLet) // This is a variable declared with let




// Can you try writing one function with var and one with let side by side in your project, log their outputs, and add a comment explaining the difference? 

// ------------------ var Example ------------------
varFunction();

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
letFunction();

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


constFuction();

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
