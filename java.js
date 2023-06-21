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

// settings for container
let container = document.getElementById("textContainer");
container.setAttribute("style", "text-align:center;");

function resetButton() {
  if (container !== null) {
    while (container.firstChild) {
      container.firstChild.onclick = null;
      container.removeChild(container.firstChild);
    }
  }
  const newElement = document.getElementById("newElt");
  if (newElement) {
    newElement.parentNode.removeChild(newElement);
  }
  document.getElementById("cpuScore").textContent = 0;
  document.getElementById("pScore").textContent = 0;

  document.getElementById("reset").style.display = "none";
  document.getElementById("score").style.display = "none";
  enableButtons();
}

let results = document.createElement("p");

function updateScores(result) {
  const score = document.getElementById("cpuScore");
  const pScore = document.getElementById("pScore");

  if (result === "You Win!") {
    let curr = +pScore.textContent;
    pScore.textContent = ++curr;
  } else {
    let curr = +score.textContent;
    score.textContent = ++curr;
  }
}

function checkEnd() {
  const score = document.getElementById("cpuScore");
  const pScore = document.getElementById("pScore");
  let end = document.getElementById("score");

  if (score.textContent == 5) {
    const winner = document.createElement("p");
    winner.id = "newElt";
    winner.textContent = "CPU WINS";
    end.appendChild(winner);
    disableButtons();
  } else if (pScore.textContent == 5) {
    const winner = document.createElement("p");
    winner.id = "newElt";
    winner.textContent = "YOU WIN";
    end.appendChild(winner);
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

const select = document.querySelectorAll(".btn");
select.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("score").setAttribute("style", "flex-direction:column; display:flex;" );
    let result = playRound(button.textContent, getComputerChoice());

    updateScores(result);
    checkEnd();
    // update content of result
    results.textContent = result;
    container.appendChild(results);
    document.getElementById("reset").style.display = "inline-block";
  });
});
