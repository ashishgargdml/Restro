const toggleHeader = document.querySelector(".dropdown-header-content");
const btn = document.querySelector("#header-btn");
const voilet = document.querySelector(".voilet");
const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const def = document.querySelector(".def");
const cyan = document.querySelector(".cyan");
const green = document.querySelector(".green");
const skyblue = document.querySelector(".skyblue");
const blue = document.querySelector(".blue");

const bgOverlay = document.querySelectorAll(".bg-overlay");
const menuOverlay = document.querySelectorAll(".menu-overlay");
const cardOverlay = document.querySelectorAll(".card-overlay");
const roundedImage = document.querySelectorAll(".testimonial-image img");
const footer = document.querySelectorAll(".footer");
const clockSvg = document.querySelectorAll(".days > svg");
const hoverSvg = document.querySelectorAll("svg ");

const colorChnage = (color) => {
  console.log(color);
  bgOverlay.forEach((ele) => {
    ele.style.backgroundColor = color;
    // ele.style.opacity = 0.08;
  });
  menuOverlay.forEach((ele) => {
    ele.style.backgroundColor = color;
    // ele.style.opacity = 0.08;
  });
  cardOverlay.forEach((ele) => {
    ele.style.backgroundColor = color;
    // ele.style.opacity = 0.08;
  });
  roundedImage.forEach((ele) => {
    ele.style.borderColor = "#8E43F0";
  });
  footer.forEach((ele) => (ele.style.background = color));
  clockSvg.forEach((ele) => (ele.style.background = "#00AC97"));
};

red.addEventListener("click", () => colorChnage("#2B161B"));
voilet.addEventListener("click", () => colorChnage("#150E1F"));
pink.addEventListener("click", () => colorChnage("#2B161B"));
orange.addEventListener("click", () => colorChnage("#1E1810"));
def.addEventListener("click", () => colorChnage(""));
cyan.addEventListener("click", () => colorChnage("#14261C"));
green.addEventListener("click", () => colorChnage("#14261C"));
skyblue.addEventListener("click", () => colorChnage("#101218"));
blue.addEventListener("click", () => colorChnage("#101218"));

hoverSvg.forEach((ele) =>
  ele.addEventListener("mouseover", () => (ele.style.fill = "#00AC97"))
);
hoverSvg.forEach((ele) =>
  ele.addEventListener("mouseout", () => (ele.style.fill = "#fff"))
);

btn.addEventListener("click", () => {
  toggleHeader.style.display == "block"
    ? (toggleHeader.style.display = "none")
    : (toggleHeader.style.display = "block");
  toggleHeader.style.backgroundColor = "#fff";
});
btn.addEventListener("blur", () => {
  toggleHeader.style.display = "none";
  btn.style.backgroundColor = "";
});
