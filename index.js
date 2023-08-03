const toggleHeader = document.querySelector(".dropdown-header-content");
const btn = document.querySelector("#header-btn");
const voilet = document.querySelector(".voilet");
const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const darkPink = document.querySelector(".dark-pink");
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
const quickLinks = document.querySelectorAll(".quick-links li");

const defColor = ["#1a1a1a", "#f5c61c", "#f5c61c"];
const voiletColor = ["#150E1F", "#6300E2", "#8E43F0"];
const redColor = ["#2B161B", "#EF4D48", "#D90700"];
const pinkColor = ["#2B161B", "#FF42B3", "#FF0099"];
const darkPinkColor = ["#2B161B", "#FA036B", "#FF6A97"];
const orangeColor = ["#1E1810", "#FF5100", "#FF7A3D"];
const cyanColor = ["#14261C", "#00AC97", "#30C7B5"];
const greenColor = ["#14261C", "#06752E", "#1BAE70"];
const blueColor = ["#101218", "#084AF3", "#4175FC"];
const skyblueColor = ["#101218", "#08ACF2", "#2FC1FF"];

const colorChnage = (color) => {
  console.log(color);
  bgOverlay.forEach((ele) => {
    ele.style.backgroundColor = color[0];
    // ele.style.opacity = 0.08;
  });
  menuOverlay.forEach((ele) => {
    ele.style.backgroundColor = color[0];
    // ele.style.opacity = 0.08;
  });
  cardOverlay.forEach((ele) => {
    ele.style.backgroundColor = color[0];
    // ele.style.opacity = 0.08;
  });
  roundedImage.forEach((ele) => {
    ele.style.borderColor = color[2];
  });
  footer.forEach((ele) => (ele.style.background = color[0]));
  clockSvg.forEach((ele) => (ele.style.background = color[1]));
  hoverSvg.forEach((ele) =>
    ele.addEventListener("mouseover", () => (ele.style.fill = color[2]))
  );
  hoverSvg.forEach((ele) =>
    ele.addEventListener("mouseout", () => (ele.style.fill = "#fff"))
  );
  quickLinks.forEach((ele) =>
    ele.addEventListener("mouseover", () => (ele.style.color = color[2]))
  );
  quickLinks.forEach((ele) =>
    ele.addEventListener("mouseout", () => (ele.style.color = "#fff"))
  );
};

red.addEventListener("click", () => colorChnage(redColor));
voilet.addEventListener("click", () => colorChnage(voiletColor));
pink.addEventListener("click", () => colorChnage(pinkColor));
darkPink.addEventListener("click", () => colorChnage(darkPinkColor));
orange.addEventListener("click", () => colorChnage(orangeColor));
def.addEventListener("click", () => colorChnage(defColor));
cyan.addEventListener("click", () => colorChnage(cyanColor));
green.addEventListener("click", () => colorChnage(greenColor));
skyblue.addEventListener("click", () => colorChnage(skyblueColor));
blue.addEventListener("click", () => colorChnage(blueColor));

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
