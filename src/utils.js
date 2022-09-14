// Random Integer

const getRandomInteger = (min, max) => {
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInteger;
};

export default getRandomInteger;
