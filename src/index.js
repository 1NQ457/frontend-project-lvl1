import readlineSync from 'readline-sync';

const engine = (gameDescription, generateTask) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  const attempts = 3;
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < attempts) {
    const [question, correctAnswer] = generateTask();

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
