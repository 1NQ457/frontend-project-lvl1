import engine from '../index.js';
import generateRandom from '../random_generator.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTask = () => {
  const question = generateRandom(100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const run = () => {
  engine(gameDescription, generateTask);
};

export default run;
