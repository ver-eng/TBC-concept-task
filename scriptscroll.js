"use strict";

const offersContainer = document.querySelector(".offers");
const progressBar = document.querySelector(".progress-bar");
// const leftButton = document.querySelector(".scroll-button.left");
// const rightButton = document.querySelector(".scroll-button.right");

let isDown = false;
let startX;
let scrollLeft;

offersContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - offersContainer.offsetLeft;
  scrollLeft = offersContainer.scrollLeft;
});

offersContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

offersContainer.addEventListener("mouseup", () => {
  isDown = false;
});

offersContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - offersContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scrolling speed
  offersContainer.scrollLeft = scrollLeft - walk;
  updateProgressBar();
});

// leftButton.addEventListener("click", () => {
//   offersContainer.scrollLeft -= 200;
//   updateProgressBar();
// });

// rightButton.addEventListener("click", () => {
//   offersContainer.scrollLeft += 200;
//   updateProgressBar();
// });

offersContainer.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  const containerWidth = document.querySelector(".offers").offsetWidth;
  const scrollWidth = offersContainer.scrollWidth - offersContainer.clientWidth;
  const scrollLeft = offersContainer.scrollLeft;
  const scrollPercentage = (scrollLeft / scrollWidth) * 100;
  const progressBarWidth = containerWidth - 100; // Fixed width of the progress bar
  progressBar.style.width = (scrollPercentage / 100) * progressBarWidth + "px";
}
