import runGame from '../index.js';
import { getRandomNumber } from "../getNum.js";

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getArithmeticProgression = () => {
    let number = getRandomNumber(0, 50);
    const nextValue = getRandomNumber(2, 5);
    const result = [];

    for (let i = 0; i < progressionLength; i++) {
        result.push(number);
        number += nextValue;
    }
    return result;
};

const getQuestionAndAnswer = () => {
    const result = getArithmeticProgression();
    const randomIndex = getRandomNumber(0, progressionLength);
    const correctAnswer = String(result[randomIndex]);
    result[randomIndex] = '...';
    return [result, correctAnswer];
}

export default () => {
    runGame(description, getQuestionAndAnswer);
};
