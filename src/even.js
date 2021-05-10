import readlineSync from 'readline-sync';
import greeting from './cli.js';

const name = greeting();

const even = () => {
  const allowedAnswers = ['yes', 'no'];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = question % 2 === 0 ? allowedAnswers[0] : allowedAnswers[1];

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    if (!allowedAnswers.includes(answer) || answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');

    countCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

export default even;
