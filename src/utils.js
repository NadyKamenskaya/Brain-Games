// Random Integer

export const getRandomInteger = (min, max) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomInteger;
};

// Finding the Greatest Common Divisor

export const gcd = (a, b) => {
  const smallest = Math.min(a, b);

  for (let largestDivisor = smallest; largestDivisor > 0; largestDivisor -= 1) {
    if (a % largestDivisor === 0 && b % largestDivisor === 0) {
      return largestDivisor;
    }
  }

  return 1;
};

// Progression generation

export const progressionGeneration = (seed, step, lengthOfProgression) => {
  const progression = [seed];

  for (let index = 1; index < lengthOfProgression; index += 1) {
    progression.push(progression[index - 1] + step);
  }

  return progression;
};

// Prime number

export const isPrimeNumber = (number) => {
  if (number < 2) return 'no';

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};
