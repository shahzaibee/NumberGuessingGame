#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 100) + 1;



function startGame() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "guess",
        message: "Guess a number between 1 and 100:",
        validate: (value) => value >= 1 && value <= 100,
      },
    ])
    .then((answers) => {
      const guess = answers.guess;
      if (guess === randomNumber) {
        console.log("Congratulations, you guessed the number!");
      } else if (guess < randomNumber) {
        console.log("Too low, try again!");
        startGame();
      } else {
        console.log("Too high, try again!");
        startGame();
      }
    });
}

console.log("Welcome to the number guessing game!");
startGame();
