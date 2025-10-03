const questions = [
  {
    question: "What will this print?\n\nconsole.log(a); var a = 10;",
    options: ["10", "undefined", "ReferenceError", "null"],
    answer: "undefined"
  },
  {
    question: "What happens with let before initialization?",
    options: ["undefined", "ReferenceError", "null", "NaN"],
    answer: "ReferenceError"
  },
  {
    question: "Does const allow reassignment?",
    options: ["Yes", "No"],
    answer: "No"
  }
];

exports = module.exports = questions;