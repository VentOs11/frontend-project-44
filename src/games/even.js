import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => {
    if (number % 2 !== 0) {
        return false;
    }
    return true;
};

const getQuestionAndAnswer = () => {
    const question = getRandomNumber(0, 100);
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};