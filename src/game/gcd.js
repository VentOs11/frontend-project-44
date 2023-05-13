import runGame from '../index.js';
import { getRandomNumber } from "../getNum.js";

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstItem, secondItem) => {
    if (firstItem === 0 || secondItem === 0) {
        return firstItem + secondItem;
    }
    if (firstItem > secondItem) {
        return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
    }
    return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

const getQuestionAndAnswer = () => {
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));

    return [question, correctAnswer];
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};
