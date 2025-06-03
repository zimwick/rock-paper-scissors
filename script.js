"use strict";

const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "s";
    case 1:
      return "p";
    case 2:
      return "r";
  }
};

const getHumanChoice = function () {
  const choice = prompt("Type (s)cissors, (p)aper, or (r)ock");
  return choice;
};

const playRound = function (humanChoice, computerChoice) {
  const humanChoiceLower = humanChoice.toLowerCase();

  if (humanChoiceLower === "s" && computerChoice === "p") {
    console.log("You win! Scissors beats Paper");
    return "player";
  } else if (humanChoiceLower === "s" && computerChoice === "r") {
    console.log("You lose! Rock beats Scissors");
    return "computer";
  } else if (humanChoiceLower === "p" && computerChoice === "r") {
    console.log("You win! Paper beats Rock");
    return "player";
  } else if (humanChoiceLower === "p" && computerChoice === "s") {
    console.log("You lose! Scissors beats Paper");
    return "computer";
  } else if (humanChoiceLower === "r" && computerChoice === "s") {
    console.log("You win! Rock beats Scissors");
    return "player";
  } else if (humanChoiceLower === "r" && computerChoice === "p") {
    console.log("You lose! Paper beats Rock");
    return "computer";
  } else {
    console.log("nobody wins, its a tie!");
    return null;
  }
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  const result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "player") {
    humanScore += 1;
  } else if (result === "computer") {
    computerScore += 1;
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("You lose!");
  } else {
    console.log("its a tie!");
  }
};

playGame();
