import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import { startGameEngine, roundsCount } from '../index.js';

// Calculate Expression

const calculateExpression = (firstNumber, sign, secondNumber) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown expression operator: '${sign}'!`);
  }
};

// Launch Game

const launchGame = () => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  const signArray = ['+', '-', '*'];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = Number(getRandomInteger(1, 100));
    const secondNumber = Number(getRandomInteger(1, 100));
    const sign = signArray[getRandomInteger(0, signArray.length - 1)];
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = calculateExpression(firstNumber, sign, secondNumber);

    const pair = cons(question, answer);
    rounds.push(pair);
  }

  startGameEngine(description, rounds);
};

export default launchGame;
