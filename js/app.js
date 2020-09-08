const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-responsive");
const links = document.querySelectorAll(".nav-link-responsive");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
