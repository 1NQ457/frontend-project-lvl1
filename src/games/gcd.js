import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const logic = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(rules, logic);
};

export default run;
