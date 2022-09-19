import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import startGameEngine from '../index.js';

// Prime number

const isPrimeNumber = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Launch Game

const launchGame = () => {
  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionAnswer = [];
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInteger(0, 100);

    const question = `${number}`;
    const answer = isPrimeNumber(number) ? 'yes' : 'no';

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  startGameEngine(ruleGame, questionAnswer);
};

export default launchGame;
