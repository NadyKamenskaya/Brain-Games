import { cons } from '@hexlet/pairs';
import { getRandomInteger, isPrimeNumber } from '../src/utils.js';
import gameEngine from '../src/index.js';

const gameLaunch = () => {
  const gameRules = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
  const questionAnswer = [];

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInteger(0, 100);

    const question = `${number}`;
    const answer = isPrimeNumber(number);

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
