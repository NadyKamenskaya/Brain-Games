import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import { startGameEngine, roundsCount } from '../index.js';

// Finding an even number

const isEven = (number) => number % 2 === 0;

// Launch Game

const launchGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomInteger(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    const pair = cons(question, answer);
    rounds.push(pair);
  }

  startGameEngine(description, rounds);
};

export default launchGame;
