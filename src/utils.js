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
