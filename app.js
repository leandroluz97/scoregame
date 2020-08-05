//var declaration
const newGame = document.querySelector("#newGame");
const newLabel = document.querySelector("#newLabel");
const newIcon = document.querySelector("#new-icon");
const scoreOne = document.querySelector("#score-1");
let playerOne = document.querySelector("#player-1");
const scoreTwo = document.querySelector("#score-2");
let playerTwo = document.querySelector("#player-2");
const playScore = document.querySelector("#play");
const countPlusLeft = document.querySelector(".count-left-1");
const countMinusLeft = document.querySelector(".count-right-1");
const countPlusRight = document.querySelector(".count-left-2");
const countMinusRight = document.querySelector(".count-right-2");
const input = document.querySelector("#input");

function playerNames() {
  let player1 = prompt("Enter player 1 name: ");
  let player2 = prompt("Enter player 2 name: ");
  let playerOneName = playerOne.innerHTML;
  let playerTwoName = playerTwo.innerHTML;
  if (player1.length < 1 || player2.length < 1) {
    playerOne.innerHTML = playerOneName;
    playerTwo.innerHTML = playerTwoName;
  } else {
    playerOne.innerHTML = " ";
    playerOne.innerHTML = player1;
    playerTwo.innerHTML = " ";
    playerTwo.innerHTML = player2;
  }
}
//call the function
playerNames();

//Mouse Over
newGame.addEventListener("mouseover", () => {
  newLabel.classList.add("newGameEffect");
  newIcon.classList.add("newIconEffect");
});
//Mouse Out
newGame.addEventListener("mouseout", () => {
  newLabel.classList.remove("newGameEffect");
  newIcon.classList.remove("newIconEffect");
});

//RESET
newGame.addEventListener("click", reset);
function reset() {
  scoreOne.innerHTML = 0;
  scoreTwo.innerHTML = 0;
  playScore.innerHTML = 5;
  input.value = "";
  playerOne.classList.remove("loser");
  playerTwo.classList.remove("loser");
  scoreOne.classList.remove("loser");
  scoreTwo.classList.remove("loser");
}

//PLUS LEFT
countPlusLeft.addEventListener("click", function () {
  if (
    Number(scoreOne.innerHTML) != Number(playScore.innerHTML) &&
    Number(scoreTwo.innerHTML) != Number(playScore.innerHTML)
  ) {
    if (Number(playScore.innerHTML) > Number(scoreOne.innerHTML)) {
      scoreOne.innerHTML = Number(scoreOne.innerHTML) + 1;
    }
  }
  // if Score One win Score Two will recieve loserclass
  if (
    Number(scoreOne.innerHTML) !== 0 &&
    Number(scoreOne.innerHTML) === Number(playScore.innerHTML)
  ) {
    playerTwo.classList.add("loser");
    scoreTwo.classList.add("loser");
  }
});

//MINUS LEFT
countMinusLeft.addEventListener("click", function () {
  if (
    Number(scoreOne.innerHTML) != Number(playScore.innerHTML) &&
    Number(scoreTwo.innerHTML) != Number(playScore.innerHTML)
  ) {
    if (Number(scoreOne.innerHTML) > 0) {
      scoreOne.innerHTML = Number(scoreOne.innerHTML) - 1;
    }
  }
});

//PLUS RIGHT
countPlusRight.addEventListener("click", function () {
  if (
    Number(scoreOne.innerHTML) != Number(playScore.innerHTML) &&
    Number(scoreTwo.innerHTML) != Number(playScore.innerHTML)
  ) {
    if (Number(playScore.innerHTML) > Number(scoreTwo.innerHTML)) {
      scoreTwo.innerHTML = Number(scoreTwo.innerHTML) + 1;
    }
  }
  // if Score Two win Score One will recieve loserclass
  if (
    Number(scoreTwo.innerHTML) !== 0 &&
    Number(scoreTwo.innerHTML) === Number(playScore.innerHTML)
  ) {
    playerOne.classList.add("loser");
    scoreOne.classList.add("loser");
  }
});

//MINUS RIGHT
countMinusRight.addEventListener("click", function () {
  if (
    Number(scoreOne.innerHTML) != Number(playScore.innerHTML) &&
    Number(scoreTwo.innerHTML) != Number(playScore.innerHTML)
  ) {
    if (Number(scoreTwo.innerHTML) > 0) {
      scoreTwo.innerHTML = Number(scoreTwo.innerHTML) - 1;
    }
  }
});

//PLAY SCORE
input.addEventListener("change", function () {
  if (Number(scoreTwo.innerHTML) || Number(scoreOne.innerHTML) > 0) {
    reset();
  } else {
    playScore.innerHTML = input.value;
  }
});
