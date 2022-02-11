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

//defining colour variables
const rockColor = "#ff36b5";
const paperColor = "#45a2ff";
const scissorsColor = "#fff648";
const mainColor = "#d1d1d1";

//defining variables

// const selector = ["rock", "paper", "scissors"];

// console.log(selector.indexOf("paper"));

//defining mouse functions
const mouseOverButton = function (input) {
  rockLogoImg.src = "./image/rock-title-grey.svg";
  paperLogoImg.src = "./image/paper-title-grey.svg";
  scissorsLogoImg.src = "./image/scissors-title-grey.svg";
  document.getElementById(
    `logo-${input}-img`
  ).src = `./image/${input}-title-color.svg`;
  document.getElementById(
    `main-${input}-img`
  ).src = `./image/${input}-color.svg`;
};
const mouseOutButton = function (input) {
  rockLogoImg.src = "./image/rock-title-color.svg";
  paperLogoImg.src = "./image/paper-title-color.svg";
  scissorsLogoImg.src = "./image/scissors-title-color.svg";
  document.getElementById(
    `main-${input}-img`
  ).src = `./image/${input}-grey.svg`;
  document.getElementById(`main-${input}-btn`).style = "Border: none;";
};

// Mouse interactions with main buttons - Rock
rockBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("rock");
});
rockBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("rock");
});
// Mouse interactions with main buttons - Paper
paperBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("paper");
});
paperBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("paper");
});
// Mouse interactions with main buttons - Scissors
scissorsBtnEl.addEventListener("mouseover", function () {
  mouseOverButton("scissors");
});
scissorsBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("scissors");
});
