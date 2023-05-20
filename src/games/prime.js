import runGame from "../index.js";
import { getRandomNumber } from "../utils.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (Math.sqrt(number)) {
            return false;
        }
    }
    return true;
};



const getQuestionAndAnswer = () => {
    const question = getRandomNumber(2, 100);
    const correctAnswer = getPrimeNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};