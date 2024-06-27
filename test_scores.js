"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // to call the function on button various button clicks
  document.getElementById("add").addEventListener("click", addScore);
  document
    .getElementById("display_results")
    .addEventListener("click", displayResults);
  document
    .getElementById("display_scores")
    .addEventListener("click", displayScores);
});

// creating arrays to store names and scores
var names = [];
var scores = [];

// function to display the results
function displayResults() {
  var resultsDiv = document.getElementById("results");
  var averageScore = calculateAverageScore();
  var highestScore = calculateHighestScore();

  // Clear previous elements
  resultsDiv.innerHTML = "";

  // Create and display heading element
  var heading = document.createElement("h2");
  heading.textContent = "Results";
  resultsDiv.appendChild(heading);

  // Create and display average score element
  var averageScoreElement = document.createElement("p");
  averageScoreElement.textContent = "Average Score: " + averageScore.toFixed(2);
  resultsDiv.appendChild(averageScoreElement);

  // Create and display highest score element
  var highestScoreElement = document.createElement("p");
  highestScoreElement.textContent = "Highest Score: " + highestScore;
  resultsDiv.appendChild(highestScoreElement);
}

// function to display scores
function displayScores() {
  var scoresDiv = document.getElementById("scores");

  // Clear previous nodes
  scoresDiv.innerHTML = "";

  // Display name and scores
  for (var i = 0; i < names.length; i++) {
    var nameLabel = document.createElement("label");
    nameLabel.textContent = names[i];
    scoresDiv.appendChild(nameLabel);

    var scoreLabel = document.createElement("label");
    scoreLabel.textContent = scores[i];
    scoresDiv.appendChild(scoreLabel);

    scoresDiv.appendChild(document.createElement("br"));
  }
}

// function to add scores
function addScore() {
  var nameInput = document.getElementById("name");
  var scoreInput = document.getElementById("score");
  var enteredName = nameInput.value;
  var enteredScore = parseInt(scoreInput.value);

  // Data validation to check if input is valid
  var nameErrorSpan = nameInput.nextElementSibling;
  var scoreErrorSpan = scoreInput.nextElementSibling;

  nameErrorSpan.textContent = "";
  scoreErrorSpan.textContent = "";

  // display message if no name is entered
  if (enteredName.trim() === "") {
    nameErrorSpan.textContent = "Please enter a name.";
    return;
  }
  // check if score is a valid number between 0 and 100
  if (isNaN(enteredScore) || enteredScore < 0 || enteredScore > 100) {
    scoreErrorSpan.textContent = "Score must be a number between 0 and 100.";
    return;
  }

  // Adding name and score to arrays
  names.push(enteredName);
  scores.push(enteredScore);

  // Clearing the current input fields
  nameInput.value = "";
  scoreInput.value = "";

  // Clear error messages
  nameErrorSpan.textContent = "";
  scoreErrorSpan.textContent = "";
}

// function to calculate average scores
function calculateAverageScore() {
  var sum = 0;
  for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

// function to calculate the highest score
function calculateHighestScore() {
  var highest = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}
