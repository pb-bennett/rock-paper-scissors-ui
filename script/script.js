"use strict";

const rockBtnEl = document.getElementById("main-rock-btn");
const paperBtnEl = document.getElementById("main-paper-btn");
const scissorsBtnEl = document.getElementById("main-scissors-btn");

const rockBtnImgEl = document.getElementById("main-rock-img");
const paperBtnImgEl = document.getElementById("main-paper-img");
const scissorsBtnImgEl = document.getElementById("main-scissors-img");

const mouseOverButton = function (inputEl, input) {
  inputEl.src = `./image/${input}-raised.svg`;
};

rockBtnEl.addEventListener("mouseover", function () {
  // rockBtnImgEl.src = "./image/rock-raised.svg";
  // console.log("Click - Rock");
  mouseOverButton(rockBtnImgEl, "rock");
});
rockBtnEl.addEventListener("mouseout", function () {
  rockBtnImgEl.src = "./image/rock-lowered.svg";
  // console.log("Click - Rock");
});

paperBtnEl.addEventListener("mouseover", function () {
  // paperBtnImgEl.src = "./image/paper-raised.svg";
  // console.log("Click - Paper");
  mouseOverButton(paperBtnImgEl, "paper");
});
paperBtnEl.addEventListener("mouseout", function () {
  paperBtnImgEl.src = "./image/paper-lowered.svg";
  // console.log("Click - Paper");
});

scissorsBtnEl.addEventListener("mouseover", function () {
  // scissorsBtnImgEl.src = "./image/scissors-raised.svg";
  // console.log("Click - Scissors");
  mouseOverButton(scissorsBtnImgEl, "scissors");
});
scissorsBtnEl.addEventListener("mouseout", function () {
  scissorsBtnImgEl.src = "./image/scissors-lowered.svg";
  // console.log("Click - Scissors");
});
