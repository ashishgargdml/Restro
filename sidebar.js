function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.querySelector(".w3-button").style.transform =
    "translate(-190px , 0)";
}

function w3_close() {
  document.querySelector(".w3-button").style.transform = "translate(0px , 0)";
  document.getElementById("mySidebar").style.display = "none";
}

const scrollDown = document.querySelector(".scroll-down");

scrollDown.addEventListener("click", () =>
  document.querySelector(".atmosphere").scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
);

scrollDown.addEventListener(
  "mouseover",
  () => (scrollDown.style.cursor = "pointer")
);
scrollDown.addEventListener(
  "mouseout",
  () => (scrollDown.style.cursor = "unset")
);
