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

const playRound = function (humanChoice, computerChoice) {
  let computerImagePath;
  let humanImagePath;

  switch (humanChoice) {
    case "s":
      humanImagePath = "./imgs/Scissors.png";
      break;
    case "r":
      humanImagePath = "./imgs/Rock.png";
      break;
    case "p":
      humanImagePath = "./imgs/Paper.png";
      break;
  }
  switch (computerChoice) {
    case "s":
      computerImagePath = "./imgs/Scissors.png";
      break;
    case "r":
      computerImagePath = "./imgs/Rock.png";
      break;
    case "p":
      computerImagePath = "./imgs/Paper.png";
      break;
  }

  playerImage.setAttribute("src", humanImagePath);
  computerImage.setAttribute("src", computerImagePath);
  playerImage.style.visibility = "visible";
  computerImage.style.visibility = "visible";

  if (humanChoice === "s" && computerChoice === "p") {
    console.log("You win! Scissors beats Paper");
    return "player";
  } else if (humanChoice === "s" && computerChoice === "r") {
    console.log("You lose! Rock beats Scissors");
    return "computer";
  } else if (humanChoice === "p" && computerChoice === "r") {
    console.log("You win! Paper beats Rock");
    return "player";
  } else if (humanChoice === "p" && computerChoice === "s") {
    console.log("You lose! Scissors beats Paper");
    return "computer";
  } else if (humanChoice === "r" && computerChoice === "s") {
    console.log("You win! Rock beats Scissors");
    return "player";
  } else if (humanChoice === "r" && computerChoice === "p") {
    console.log("You lose! Paper beats Rock");
    return "computer";
  } else {
    console.log("nobody wins, its a tie!");
    return null;
  }
};

const updateScore = function (roundWinner) {
  if (currentRound < maxRounds - 1) {
    if (roundWinner === "player") {
      humanScore += 1;
      playerScoreDisplay.textContent = humanScore;
    } else if (roundWinner === "computer") {
      computerScore += 1;
      computerScoreDisplay.textContent = computerScore;
    }
    currentRound += 1;
  } else {
    if (humanScore > computerScore) {
      console.log("You win!");
    } else if (computerScore > humanScore) {
      console.log("You lose!");
    } else {
      console.log("its a tie!");
    }
  }
};

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

let maxRounds = 5;

rock.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  const roundWinner = playRound("r", computerChoice);
  updateScore(roundWinner);
});

scissors.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  const roundWinner = playRound("s", computerChoice);
  updateScore(roundWinner);
});

paper.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();
  const roundWinner = playRound("p", computerChoice);
  updateScore(roundWinner);
});
