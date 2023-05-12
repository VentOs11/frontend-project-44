import runGame from "../index.js"
import { getRandomNumber } from "../getNum.js";

const symbolOperator = ['+', '-', '*'];
const description = "What is the result of the expression?";

const getRandomSymbol = (symbols) => {
  const symbolLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolLength);
  return symbols[randomIndex];

};

const calcMathOperation = (symbol, firstValue, secondValue) => {
    if (symbol === '+') {
      return firstValue + secondValue;
    } else if (symbol === '-') {
      return  firstValue - secondValue;
    } else if (symbol === '*') {
      return firstValue * secondValue;
    } else {
        return null;
    }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomSymbol(symbolOperator);
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calcMathOperation(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
