#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const evenNumberGame = () => {
  const name = greeting();
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');

  for (let i = 1; i <= 3; i += 1) {
    const randomInteger = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomInteger}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomInteger % 2 === 0) ? 'yes' : 'no';

    if (correctAnswer !== answer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

evenNumberGame();
