
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll("#header .navbar ul li");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let anchor = link.querySelector("a");
    if (anchor) {
      anchor.click();
    }

    navbar.classList.remove("active");
    menu.classList.remove("bx-x");
  });
});

var header = document.getElementById("header");
var scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    if (!scrolled) {
      header.classList.add("scrolled");
      scrolled = true;
    }
  } else {
    if (scrolled) {
      header.classList.remove("scrolled");
      scrolled = false;
    }
  }
};


AOS.init();
