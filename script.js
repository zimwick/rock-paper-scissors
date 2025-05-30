"use strict";

const getComputerChoice = function () {
  const computerChocie = Math.floor(Math.random() * 3);

  switch (computerChocie) {
    case 0:
      return "Scissors";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Rock";
      break;
  }
};

console.log(getComputerChoice());
