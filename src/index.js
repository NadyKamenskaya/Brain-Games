import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

// User greeting

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// The logical part of the games

const gameEngine = (gameRules, questionAnswer) => {
  const name = greeting();
  console.log(gameRules);

  for (let i = 0; i < questionAnswer.length; i += 1) {
    const question = car(questionAnswer[i]);
    const correctAnswer = cdr(questionAnswer[i]);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== answer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
