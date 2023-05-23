const menu = document.querySelector(".menu");
const navbar = document.querySelectorAll(".nav-link");

menu.addEventListener("click", openNav());

function openNav() {
  // navbar.classList.toggle('show')
  navbar.forEach((navbar) => navbar.classList.toggle("hide"));
}
