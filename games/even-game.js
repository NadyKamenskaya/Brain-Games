import { cons } from '@hexlet/pairs';
import { getRandomInteger, isEven } from '../src/utils.js';
import gameEngine from '../src/index.js';

const gameLaunch = () => {
  const gameRules = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
  const questionAnswer = [];

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInteger(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
