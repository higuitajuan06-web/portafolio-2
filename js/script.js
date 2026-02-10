const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});


