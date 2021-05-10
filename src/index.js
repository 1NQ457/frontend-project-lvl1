import readlineSync from 'readline-sync';
import greeting from './cli.js';

const engine = (rules, logic) => {
  const name = greeting();

  console.log(rules);

  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const [question, correctAnswer] = logic();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    countCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;
