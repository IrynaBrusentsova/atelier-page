"use strict";

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

const prev = document.querySelector(".prev");
console.log(prev);
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");

let degrees = 0;

prev.addEventListener("click", function () {
  degrees += 40;
  slider.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});

next.addEventListener("click", function () {
  degrees -= 40;
  slider.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});
