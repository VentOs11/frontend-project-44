/* eslint-disable no-param-reassign */

import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getArithmeticProgression = (number, step) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const element = number + i * step;
    result.push(element);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const randomNum = getRandomNumber(0, 20);
  const randomStep = getRandomNumber(2, 5);
  const result = getArithmeticProgression(randomNum, randomStep);
  const randomIndex = getRandomNumber(0, progressionLength);
  const correctAnswer = String(result[randomIndex]);
  result[randomIndex] = '..';
  const resToString = result.join(' ');
  return [resToString, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
