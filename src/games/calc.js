import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const symbolOperator = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calcMathOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown operator ${symbol}`);
  }
};

const getQuestionAndAnswer = () => {
  const symbolLength = symbolOperator.length;
  const randomIndex = getRandomNumber(0, symbolLength);
  const randomSymbol = symbolOperator[randomIndex];
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calcMathOperation(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
