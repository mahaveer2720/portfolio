//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sctions = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

windows.onscroll = () => {
  //remove toggle icon and navbar when click navbar link  (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
