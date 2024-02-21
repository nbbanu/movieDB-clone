const hamburgerMenu = document.querySelector(".hamburger-menu");
const responsiveNavbar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click",() => {

    responsiveNavbar.classList.toggle("sidebar-active");
});