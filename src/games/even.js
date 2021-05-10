import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const logic = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const run = () => {
  engine(rules, logic);
};

export default run;
