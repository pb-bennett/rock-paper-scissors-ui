"use strict";
//defining elements
const rockBtnEl = document.getElementById("main-rock-btn");
const paperBtnEl = document.getElementById("main-paper-btn");
const scissorsBtnEl = document.getElementById("main-scissors-btn");

const rockLogoImg = document.getElementById("logo-rock-img");
const paperLogoImg = document.getElementById("logo-paper-img");
const scissorsLogoImg = document.getElementById("logo-scissors-img");

const rockBtnImgEl = document.getElementById("main-rock-img");
const paperBtnImgEl = document.getElementById("main-paper-img");
const scissorsBtnImgEl = document.getElementById("main-scissors-img");

const battleModalEl = document.getElementById("battle-modal");
const overlayEl = document.querySelector(".overlay");

const commitImgEl = document.getElementById("commit-img");
const commitBtnEl = document.getElementById("commit-btn");

//defining colour variables
const rockColor = "#ff36b5";
const paperColor = "#45a2ff";
const scissorsColor = "#fff648";
const mainColor = "#d1d1d1";

//defining variables
const options = ["rock", "paper", "scissors"];
const scores = [0, 0];
let chosenToggle = 0;
let chosen;

//defining click functions

const clickChoose = function (input) {
  chosenToggle = 1;
  chosen = input;
  console.log(chosen);
  for (let ch = 0; ch < 3; ch++) {
    document.getElementById(
      `logo-${options[ch]}-img`
    ).src = `./image/${options[ch]}-title-grey.svg`;
    document.getElementById(
      `main-${options[ch]}-img`
    ).src = `./image/${options[ch]}-grey.svg`;
    document
      .getElementById(`main-${options[ch]}-img`)
      .classList.remove("shadow");
  }
  commitImgEl.src = "./image/commit-color.svg";
  commitImgEl.classList.add("shadow");
  document.getElementById(`main-${input}-img`).classList.add("shadow");

  document.getElementById(
    `logo-${input}-img`
  ).src = `./image/${input}-title-color.svg`;
  document.getElementById(
    `main-${input}-img`
  ).src = `./image/${input}-color.svg`;
};

//definging winning function

const aWinner = function () {
  if (scores[0] > scores[1]) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
};

//defining mouse functions
const mouseOverButton = function (input) {
  if (chosenToggle === 0) {
    rockLogoImg.src = "./image/rock-title-grey.svg";
    paperLogoImg.src = "./image/paper-title-grey.svg";
    scissorsLogoImg.src = "./image/scissors-title-grey.svg";
    document.getElementById(
      `logo-${input}-img`
    ).src = `./image/${input}-title-color.svg`;
    document.getElementById(
      `main-${input}-img`
    ).src = `./image/${input}-color.svg`;
  }
};
const mouseOutButton = function (input) {
  if (chosenToggle === 0) {
    rockLogoImg.src = "./image/rock-title-color.svg";
    paperLogoImg.src = "./image/paper-title-color.svg";
    scissorsLogoImg.src = "./image/scissors-title-color.svg";
    document.getElementById(
      `main-${input}-img`
    ).src = `./image/${input}-grey.svg`;
    document.getElementById(`main-${input}-btn`).style = "Border: none;";
  }
};
const commitMove = function () {
  if (scores[0] > 4 || scores[1] > 4) {
    aWinner();
  } else if (chosenToggle === 1) {
    chosenToggle = 0;
    const redChoice = Math.trunc(Math.random() * 3);
    console.log("Red Choice:" + options[redChoice]);
    console.log("click");
    battleModalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  }
};

// Mouse interactions with main and logo buttons - Rock
rockBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("rock");
});
rockBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("rock");
});
rockBtnEl.addEventListener("click", function () {
  clickChoose("rock");
});
rockLogoImg.addEventListener("mouseover", function () {
  mouseOverButton("rock");
});
rockLogoImg.addEventListener("mouseout", function () {
  mouseOutButton("rock");
});
rockLogoImg.addEventListener("click", function () {
  clickChoose("rock");
});
// Mouse interactions with main and logo buttons - Paper
paperBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("paper");
});
paperBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("paper");
});
paperBtnEl.addEventListener("click", function () {
  clickChoose("paper");
});
paperLogoImg.addEventListener("mouseover", function () {
  mouseOverButton("paper");
});
paperLogoImg.addEventListener("mouseout", function () {
  mouseOutButton("paper");
});
paperLogoImg.addEventListener("click", function () {
  clickChoose("paper");
});
// Mouse interactions with main and logo buttons - Scissors
scissorsBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("scissors");
});
scissorsBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("scissors");
});
scissorsBtnEl.addEventListener("click", function () {
  clickChoose("scissors");
});
scissorsLogoImg.addEventListener("mouseover", function () {
  mouseOverButton("scissors");
});
scissorsLogoImg.addEventListener("mouseout", function () {
  mouseOutButton("scissors");
});
scissorsLogoImg.addEventListener("click", function () {
  clickChoose("scissors");
});

// Mouse interactions wtih commit button
commitBtnEl.addEventListener("mouseover", function () {
  // chosenToggle === 1 & commitBtnEl.style
});
commitBtnEl.addEventListener("mouseout", function () {});

commitBtnEl.addEventListener("click", function () {
  commitMove();
});

// escape key event listner to cancel and close

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (chosenToggle === 1) {
      chosenToggle = 0;
    }
  }
});
