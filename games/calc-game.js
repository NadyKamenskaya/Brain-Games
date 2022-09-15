import { cons } from '@hexlet/pairs';
import { getRandomInteger, calculateExpression } from '../src/utils.js';
import gameEngine from '../src/index.js';

const gameLaunch = () => {
  const gameRules = 'What is the result of the expression?';
  const questionAnswer = [];
  const signArray = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const sign = signArray[getRandomInteger(0, 2)];
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = calculateExpression(question);

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
