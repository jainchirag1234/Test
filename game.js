const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess = Number(input);

    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number");
      askGuess();
    } else if (guess > randomNumber) {
      console.log("Too High! Try again");
      askGuess();
    } else if (guess < randomNumber) {
      console.log("Too Low! Try again");
      askGuess();
    } else {
      console.log("🎉 Correct! You guessed the number");
      rl.close();
    }
  });
}

askGuess();
