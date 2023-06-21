function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === computerSelection) {
    return "Tie!";
  } else {
    return "You Win!";
  }
}

let container = document.getElementById("textContainer");

function game() {
  let cpuScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let temp = prompt("Make a Choice");
    const playerSelection =
      temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);

    let result = playRound(playerSelection, computerSelection);

    if (result === "You Win!") {
      playerScore++;
    } else {
      cpuScore++;
    }
    let paragraph = document.createElement("p");
    paragraph.textContent = result;
    container.appendChild(paragraph);
  }
  document.getElementById("reset").style.display = "inline-block";
}

function resetButton() {
  if (container !== null) {
    while (container.firstChild) {
      container.firstChild.onclick = null;
      container.removeChild(container.firstChild);
    }
  }
  document.getElementById("reset").style.display = "none";
}
