function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.querySelector(".w3-button").style.transform =
    "translate(-190px , 0)";
}

function w3_close() {
  document.querySelector(".w3-button").style.transform = "translate(0px , 0)";
  document.getElementById("mySidebar").style.display = "none";
}
