const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

const username = readlineSync.question("Tell us your name please\n");

console.log("Welcome "+username);

//question 1
var answer = readlineSync.question(chalk.yellow("Which is my favorite ? DC or Marvel or Both\n"));

if(answer == "Both" || answer == 'both'){
  score++;
  console.log("Correct answer");
}

else{
  console.log("Oops , wrong answer");
}

console.log("Your score = "+score);

//question 2
answer = readlineSync.question("Which is my favorite color?\n");

if(answer == "Black" || answer == 'black'){
  score++;
  console.log("Correct answer");
}

else{
  console.log("Oops , wrong answer");
}

console.log("Your score = "+score);