// JavaScript to control the "Go to Top" button behavior
const goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when scrolled down
window.onscroll = function () {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
} else {
    goToTopBtn.style.display = "none";
}
};

// Scroll to the top when the button is clicked
goToTopBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}