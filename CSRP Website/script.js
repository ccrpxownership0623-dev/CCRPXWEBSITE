const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");
const navbarLinks = document.getElementById("navbarLinks");
const yearElement = document.getElementById("year");

if (menuButton && navbarLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navbarLinks.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navbarLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbarLinks.classList.remove("open");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

window.addEventListener("scroll", () => {
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 30);
});

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.88;

    revealItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerPoint) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}