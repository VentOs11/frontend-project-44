import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstItem, secondItem) => {
  while (firstItem !== 0 && secondItem !== 0) {
    if (firstItem > secondItem) {
      firstItem %= secondItem;
    } else {
      secondItem %= firstItem;
    }
  }
  return firstItem + secondItem;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
