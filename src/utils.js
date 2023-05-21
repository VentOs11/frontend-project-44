const getRandomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
  return randomNumber;
};

export default getRandomNumber;
