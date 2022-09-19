import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import startGameEngine from '../index.js';

// Finding the Greatest Common Divisor

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  const smallest = Math.min(firstNumber, secondNumber);

  for (let largestDivisor = smallest; largestDivisor > 0; largestDivisor -= 1) {
    if (firstNumber % largestDivisor === 0 && secondNumber % largestDivisor === 0) {
      return largestDivisor;
    }
  }

  return 1;
};

// Launch Game

const launchGame = () => {
  const ruleGame = 'Find the greatest common divisor of given numbers.';
  const questionAnswer = [];
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = getGreatestCommonDivisor(firstNumber, secondNumber);
    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  startGameEngine(ruleGame, questionAnswer);
};

export default launchGame;
