const toggleHeader = document.querySelector(".dropdown-header-content");
const btn = document.querySelector("#header-btn");

btn.addEventListener("click", () => {
  toggleHeader.style.display = "block";
  toggleHeader.style.backgroundColor = "#fff";
});
btn.addEventListener("blur", () => {
  toggleHeader.style.display = "none";
  btn.style.backgroundColor = "";
});
