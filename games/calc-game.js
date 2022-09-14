import { cons } from '@hexlet/pairs';
import getRandomInteger from '../src/utils.js';
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
    let answer = 0;

    switch (sign) {
      case '+':
        answer = firstNumber + secondNumber;
        break;
      case '-':
        answer = firstNumber - secondNumber;
        break;
      case '*':
        answer = firstNumber * secondNumber;
        break;
      default:
        break;
    }

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
