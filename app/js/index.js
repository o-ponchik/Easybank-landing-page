const body = document.querySelector("body");
const btnHumburger = document.querySelector("#btnHumburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".header__menu");

btnHumburger.addEventListener("click", () => {
  body.classList.toggle("noscroll");
  header.classList.toggle("open");
  overlay.classList.toggle("fade-in");
  overlay.classList.toggle("fade-out");
  mobileMenu.classList.toggle("has-fade");
});
