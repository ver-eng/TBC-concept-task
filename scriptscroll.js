"use strict";

const offersContainer = document.querySelectorAll(".offers");
const progressBar = document.querySelector(".progress-bar");
// const leftButton = document.querySelector(".scroll-button.left");
// const rightButton = document.querySelector(".scroll-button.right");
let isDown = false;
let startX;
let scrollLeft;
let count = 118;
console.log(offersContainer);

offersContainer.forEach((offersContainer) => {
  offersContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - offersContainer.offsetLeft;
    scrollLeft = offersContainer.scrollLeft;
    console.log(offersContainer.offsetLeft);
  });
});

offersContainer.forEach((offersContainer) => {
  offersContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });
});

offersContainer.forEach((offersContainer) => {
  offersContainer.addEventListener("mouseup", () => {
    isDown = false;
  });
});
let marginAmount;
offersContainer.forEach((offersContainer) => {
  offersContainer.addEventListener("mousemove", (e) => {
    // console.log(e.pageX);
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - offersContainer.offsetLeft;

    const walk = (x - startX) * 2;

    offersContainer.scrollLeft = scrollLeft - walk;
    console.log(scrollLeft - walk);
    if (scrollLeft - walk > 0 && count > 0) {
      count = count - 3;
      offersContainer.style.marginLeft = `${count}px`;
    }
    if (scrollLeft - walk < 0 && count < 118) {
      count = count + 4;
      offersContainer.style.marginLeft = `${count}px`;
    }
    updateProgressBar();
  });
});

// leftButton.addEventListener("click", () => {
//   offersContainer.scrollLeft -= 200;
//   updateProgressBar();
// });

// rightButton.addEventListener("click", () => {
//   offersContainer.scrollLeft += 200;
//   updateProgressBar();
// });
offersContainer.forEach((offersContainer) => {
  offersContainer.addEventListener("scroll", updateProgressBar);
});

function updateProgressBar() {
  const containerWidth = document.querySelector(".offers").offsetWidth;
  console.log(document.querySelector(".offers"));
  const scrollWidth =
    offersContainer[0].scrollWidth - offersContainer[0].clientWidth;
  const scrollLeft = offersContainer[0].scrollLeft;
  const scrollPercentage = (scrollLeft / scrollWidth) * 100;
  const progressBarWidth = containerWidth - 100; // Fixed width of the progress bar
  progressBar.style.width = (scrollPercentage / 100) * progressBarWidth + "px";
}
