import { cons } from '@hexlet/pairs';
import { getRandomInteger, gcd } from '../src/utils.js';
import gameEngine from '../src/index.js';

const gameLaunch = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const questionAnswer = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = gcd(firstNumber, secondNumber);
    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
