"use strict";
//defining elements
const rockBtnEl = document.getElementById("main-rock-btn");
const paperBtnEl = document.getElementById("main-paper-btn");
const scissorsBtnEl = document.getElementById("main-scissors-btn");

const rockBtnImgEl = document.getElementById("main-rock-img");
const paperBtnImgEl = document.getElementById("main-paper-img");
const scissorsBtnImgEl = document.getElementById("main-scissors-img");

//defining colour variables
const rockColor = "#ff36b5";
const paperColor = "#45a2ff";
const scissorsColor = "#fff648";
const mainColor = "#d1d1d1";

//defining mouse functions
const mouseOverButton = function (input) {
  document.getElementById(
    `main-${input}-img`
  ).src = `./image/${input}-color.svg`;
  // document.getElementById(`main-${input}-btn`).style =
  // "box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; border-top: 0.05rem solid #d1d1d1;border-left: 0.05rem solid #d1d1d1 ";
  // document.getElementById(`main-${input}-btn`).style =
  //   "Border: 3px solid #d1d1d1;"; Border: 0.15rem solid #d1d1d1;
  // inputEl.src = `./image/${input}-raised.svg`;
};
const mouseOutButton = function (input) {
  document.getElementById(
    `main-${input}-img`
  ).src = `./image/${input}-grey.svg`;
  document.getElementById(`main-${input}-btn`).style = "Border: none;";
  // inputEl.src = `./image/${input}-lowered.svg`;
  // console.log(`mouse out ${input}`);
};

// Mouse interactions with main buttons - Rock
rockBtnEl.addEventListener("mouseover", function () {
  // rockBtnImgEl.src = "./image/rock-raised.svg";
  // console.log("Click - Rock");
  mouseOverButton("rock");
});
rockBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("rock");
  // rockBtnImgEl.src = "./image/rock-lowered.svg";
  // console.log("Click - Rock");
});
// Mouse interactions with main buttons - Paper
paperBtnEl.addEventListener("mouseover", function () {
  // paperBtnImgEl.src = "./image/paper-raised.svg";
  // console.log("Click - Paper");
  mouseOverButton("paper");
});
paperBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("paper");
  // console.log("Click - Paper");
});
// Mouse interactions with main buttons - Scissors
scissorsBtnEl.addEventListener("mouseover", function () {
  // scissorsBtnImgEl.src = "./image/scissors-raised.svg";
  // console.log("Click - Scissors");
  mouseOverButton("scissors");
});
scissorsBtnEl.addEventListener("mouseout", function () {
  mouseOutButton("scissors");
  // scissorsBtnImgEl.src = "./image/scissors-lowered.svg";
  // console.log("Click - Scissors");
});
