import engine from '../index.js';
import generateRandom from '../random_generator.js';

const gameDescription = 'What is the result of the expression?';

const generateTask = () => {
  const operators = ['+', '-', '*'];

  const operand1 = generateRandom(100);
  const operand2 = generateRandom(100);
  const operator = operators[generateRandom(operators.length)];

  const question = `${operand1} ${operator} ${operand2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = operand1 + operand2;
      break;
    case '-':
      correctAnswer = operand1 - operand2;
      break;
    default:
      correctAnswer = operand1 * operand2;
      break;
  }

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(gameDescription, generateTask);
};

export default run;
