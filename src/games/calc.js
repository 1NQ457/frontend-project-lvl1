import engine from '../index.js';

const rules = 'What is the result of the expression?';

const logic = () => {
  const operators = ['+', '-', '*'];

  const operand1 = Math.floor(Math.random() * 100);
  const operand2 = Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${operand1} ${operator} ${operand2}`;
  let correctAnswer;
  switch (operator) {
    case operators[0]:
      correctAnswer = operand1 + operand2;
      break;
    case operators[1]:
      correctAnswer = operand1 - operand2;
      break;
    default:
      correctAnswer = operand1 * operand2;
      break;
  }

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(rules, logic);
};

export default run;
