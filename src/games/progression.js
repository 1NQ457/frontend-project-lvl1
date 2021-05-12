import engine from '../index.js';
import generateRandom from '../random_generator.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (start, length, step, missingIndex) => {
  const progression = [start];

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }

  progression[missingIndex] = '..';
  return progression.join(' ');
};

const getMissingNumber = (start, step, index) => {
  let result = start;

  for (let i = 1; i <= index; i += 1) {
    result += step;
  }

  return result;
};

const generateTask = () => {
  const start = generateRandom(100);
  const length = 5 + generateRandom(5);
  const step = generateRandom(30);
  const missingIndex = generateRandom(length - 1);

  const question = makeProgression(start, length, step, missingIndex);
  const correctAnswer = getMissingNumber(start, step, missingIndex);

  return [question, String(correctAnswer)];
};

const run = () => {
  engine(gameDescription, generateTask);
};

export default run;
