// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navBar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach.apply((links) => {
        links.classList.remove("remove");
        document
          .querySelector("header nav a[href * = '+ id + ']")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// remove toggle icon and navbar
menuIcon.classList.remove("fa-x");
navBar.classList.remove("active");

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container .portfolio-box ,contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1 .about-img", { origin: "left" });
ScrollReveal().reveal(".home contact p, about-content", { origin: "right" });

// new type js
const typed = new typed(".multiple-text", {
  strings: ["frontend developer", "web developer", "youtuber"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
