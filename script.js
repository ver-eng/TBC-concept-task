const langBox = document.querySelector(".language");
const engBox = document.querySelector(".eng-box");
// Show English language box and hide it
langBox.addEventListener("mouseover", function () {
  engBox.classList.add("active");
  console.log("here");
});
langBox.addEventListener("mouseout", function () {
  engBox.classList.remove("active");
  console.log("here");
});
