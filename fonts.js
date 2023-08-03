const mainHeading = document.querySelectorAll(".new-font");
const content = document.querySelectorAll(".sub-font");

const georgia = document.querySelector(".georgia");
const helvetica = document.querySelector(".helvetica");
const monospace = document.querySelector(".monospace");
const geneva = document.querySelector(".geneva");
const fantasy = document.querySelector(".fantasy");
const cursive = document.querySelector(".cursive");
const timesRoman = document.querySelector(".times-new-roman");

const playFair = ["Playfair Display", "Source Sans 3"];

const fontChange = (font) => {
  console.log(content);
  mainHeading.forEach((ele) => (ele.style.fontFamily = font));
  content.forEach((ele) => (ele.style.fontFamily = "'Source Sans 3'"));
};

georgia.addEventListener("click", () => fontChange("Georgia"));
helvetica.addEventListener("click", () => fontChange("Helvetica"));
monospace.addEventListener("click", () => fontChange("monospace"));
geneva.addEventListener("click", () => fontChange("Geneva"));
fantasy.addEventListener("click", () => fontChange("Playfair Display"));
cursive.addEventListener("click", () => fontChange("cursive"));
timesRoman.addEventListener("click", () => fontChange("Times New Roman"));
