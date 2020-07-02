const burger = document.querySelector(".burg");
const menu = document.querySelector(".menu");
const checkBox = document.querySelectorAll(".check");
burger.addEventListener("click", () => {
  if (!burger.classList.contains("fa-times")) {
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-times");
    menu.style.display = "flex";
  } else {
    burger.classList.remove("fa-times");
    burger.classList.add("fa-bars");
    menu.style.display = "none";
  }
});

const images = document.querySelectorAll(".img");
const poster = document.querySelector(".fon");
const buttons = document.querySelectorAll(".but");
const button = document.querySelectorAll(".buttons button");

images[0].addEventListener("click", () => {
  poster.style.opacity = 0;
  checkBox[0].style.opacity = 1;
  checkBox[0].checked = true;
  checkBox[2].checked = false;
  checkBox[1].checked = false;
  checkBox[1].style.opacity = 0;
  checkBox[2].style.opacity = 0;
  buttons[0].style.backgroundColor = "white";
  buttons[1].style.backgroundColor = "transparent";
  buttons[2].style.backgroundColor = "transparent";
});

images[1].addEventListener("click", () => {
  poster.style.opacity = 0.1;
  checkBox[1].style.opacity = 1;
  checkBox[1].checked = true;
  checkBox[0].checked = false;
  checkBox[2].checked = false;
  checkBox[0].style.opacity = 0;
  checkBox[2].style.opacity = 0;
  buttons[1].style.backgroundColor = "white";
  buttons[0].style.backgroundColor = "transparent";
  buttons[2].style.backgroundColor = "transparent";
});
images[2].addEventListener("click", () => {
  poster.style.opacity = 0.3;
  checkBox[2].style.opacity = 1;
  checkBox[2].checked = true;
  checkBox[0].checked = false;
  checkBox[1].checked = false;
  checkBox[0].style.opacity = 0;
  checkBox[1].style.opacity = 0;
  buttons[2].style.backgroundColor = "white";
  buttons[1].style.backgroundColor = "transparent";
  buttons[0].style.backgroundColor = "transparent";
});

buttons[0].addEventListener("click", () => {
  poster.style.opacity = 0;
  checkBox[0].style.opacity = 1;
  checkBox[0].checked = true;
  checkBox[2].checked = false;
  checkBox[1].checked = false;
  checkBox[1].style.opacity = 0;
  checkBox[2].style.opacity = 0;
  buttons[0].style.backgroundColor = "white";
  buttons[1].style.backgroundColor = "transparent";
  buttons[2].style.backgroundColor = "transparent";
});
buttons[1].addEventListener("click", () => {
  poster.style.opacity = 0.1;
  checkBox[1].style.opacity = 1;
  checkBox[1].checked = true;
  checkBox[0].checked = false;
  checkBox[2].checked = false;
  checkBox[0].style.opacity = 0;
  checkBox[2].style.opacity = 0;
  buttons[1].style.backgroundColor = "white";
  buttons[0].style.backgroundColor = "transparent";
  buttons[2].style.backgroundColor = "transparent";
});

buttons[2].addEventListener("click", () => {
  poster.style.opacity = 0.3;
  checkBox[2].style.opacity = 1;
  checkBox[2].checked = true;
  checkBox[0].checked = false;
  checkBox[1].checked = false;
  checkBox[0].style.opacity = 0;
  checkBox[1].style.opacity = 0;
  buttons[2].style.backgroundColor = "white";
  buttons[1].style.backgroundColor = "transparent";
  buttons[0].style.backgroundColor = "transparent";
});
const back = document.querySelector(".back");
const main = document.querySelector("main");
const info = document.querySelector(".infos");
const btInfo = document.querySelector(".btInfo");

btInfo.addEventListener("click", () => {
  info.style.display = "flex";
  main.style.display = "none";
});
back.addEventListener("click", () => {
  info.style.display = "none";
  main.style.display = "flex";
});
