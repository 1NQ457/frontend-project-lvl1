import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = () => {
  const start = Math.floor(Math.random() * 100);
  const length = 5 + Math.floor(Math.random() * 5);
  const step = Math.floor(Math.random() * 30);

  const progression = [start];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

const logic = () => {
  const progression = makeProgression();
  const missingIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(rules, logic);
};

export default run;
