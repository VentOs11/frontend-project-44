import runGame from "../index.js";
import { getRandomNumber } from "../getNum.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
};



const getQuestionAndAnswer = () => {
    const question = getRandomNumber(2, 50);
    const correctAnswer = getPrimeNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};