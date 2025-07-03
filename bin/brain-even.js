#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;

while (correctAnswers < 3) {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}