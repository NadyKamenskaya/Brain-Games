import { cons } from '@hexlet/pairs';
import { getRandomInteger, progressionGeneration } from '../src/utils.js';
import gameEngine from '../src/index.js';

const gameLaunch = () => {
  const gameRules = 'What number is missing in the progression?';
  const questionAnswer = [];

  for (let i = 0; i < 3; i += 1) {
    const seed = getRandomInteger(0, 100);
    const step = getRandomInteger(1, 10);
    const lengthOfProgression = getRandomInteger(5, 10);
    const progression = progressionGeneration(seed, step, lengthOfProgression);
    const maskIndex = getRandomInteger(0, lengthOfProgression - 1);

    const answer = progression[maskIndex];
    progression[maskIndex] = '..';

    const question = `${progression.join(' ')}`;

    const pair = cons(question, answer);
    questionAnswer.push(pair);
  }

  gameEngine(gameRules, questionAnswer);
};

export default gameLaunch;
