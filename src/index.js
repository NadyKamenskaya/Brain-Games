import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

// Number of rounds

export const roundsCount = 3;

// User greeting

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// The logical part of the games

export const startGameEngine = (description, rounds) => {
  const name = greeting();
  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    const question = car(rounds[i]);
    const correctAnswer = cdr(rounds[i]);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== answer.toLowerCase()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
