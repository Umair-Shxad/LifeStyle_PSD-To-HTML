// Navigation Toggle

// Toggle Button Access
var navToggle = document.querySelector(".toggle-btn");
// Close Button Access
var closeNav = document.querySelector(".close");
// Navigation Access
var Navigation = document.querySelector(".menu-list");

// Open Nav
navToggle.addEventListener("click", () => {
    Navigation.classList.add("nav-open");
});
// Close Nav
closeNav.addEventListener("click", () => {
    Navigation.classList.remove("nav-open");
});