const hamburger = document.querySelector(".js-header-toggle");
const headerNav = document.querySelector(".js-header-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active");
}