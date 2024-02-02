const hamburgerMenu = document.querySelector(".hamburger-menu");
const responsiveNavbar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click",() => {
    console.log("deneme")
    responsiveNavbar.classList.toggle("sidebar-active");
});