"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //all code here will execute when the DOM is fully loaded

  var userDecision;
  var aiDecision;

  function aiSelection() {
    var ai = Math.floor(Math.random() * 3);

    if (ai === 0) {
      aiDecision = "Rock";
      console.log("The AI has selected Rock");
    } else if (ai === 1) {
      aiDecision = "Paper";
      console.log("The AI has selected Paper");
    } else if (ai === 2) {
      aiDecision = "Scissors";
      console.log("The AI has selected Scissors");
    }
  }

  function comparison(userDecision, aiDecision) {
    if (userDecision == "Rock" && aiDecision == "Rock") {
      console.log("It's a tie!");
    } else if (userDecision == "Rock" && aiDecision == "Paper") {
      console.log("You Lose !");
    } else if (userDecision == "Rock" && aiDecision == "Scissors") {
      console.log("You Win!");
    } else if (userDecision == "Paper" && aiDecision == "Rock") {
      console.log("You Win!");
    } else if (userDecision == "Paper" && aiDecision == "Paper") {
      console.log("It's a tie!");
    } else if (userDecision == "Paper" && aiDecision == "Scissors") {
      console.log("You Lose !");
    } else if (userDecision == "Scissors" && aiDecision == "Rock") {
      console.log("You Lose !");
    } else if (userDecision == "Scissors" && aiDecision == "Paper") {
      console.log("You Win!");
    } else if (userDecision == "Scissors" && aiDecision == "Scissors") {
      console.log("It's a tie!");
    }
  }

  document.querySelector(".content-1").addEventListener("click", function () {
    userDecision = "Rock";
    console.log("You have selected Rock");
    aiSelection();
    comparison(userDecision, aiDecision);
  });

  document.querySelector(".content-2").addEventListener("click", function () {
    userDecision = "Paper";
    console.log("You have selected Paper");
    aiSelection();
    comparison(userDecision, aiDecision);
  });

  document.querySelector(".content-3").addEventListener("click", function () {
    userDecision = "Scissors";
    console.log("You have selected Scissors");
    aiSelection();
    comparison(userDecision, aiDecision);
  });



});