import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import startGameEngine from '../index.js';

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
      throw new Error(`Unknown order state: '${sign}'!`);
  }
};

// Launch Game

const launchGame = () => {
  const ruleGame = 'What is the result of the expression?';
  const questionAnswer = [];
  const signArray = ['+', '-', '*'];
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = Number(getRandomInteger(1, 100));
    const secondNumber = Number(getRandomInteger(1, 100));
    const sign = signArray[getRandomInteger(0, signArray.length - 1)];
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = calculateExpression(firstNumber, sign, secondNumber);

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  startGameEngine(ruleGame, questionAnswer);
};

export default launchGame;
