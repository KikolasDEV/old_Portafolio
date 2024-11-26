document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.remove("navbar-top");
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.add("navbar-top");
            navbar.classList.remove("navbar-scrolled");
        }
    });
});
