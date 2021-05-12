import engine from '../index.js';
import generateRandom from '../random_generator.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const generateTask = () => {
  const num1 = generateRandom(100);
  const num2 = generateRandom(100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(gameDescription, generateTask);
};

export default run;
