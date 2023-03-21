const sideNavIcon = document.querySelector(".side-nav-icon");
const closeSideNavIcon = document.querySelector(".side-nav-close");
const mobileNav = document.querySelector(".mobile-nav");

sideNavIcon.addEventListener('click', () => {
    mobileNav.classList.add("nav-active");
});

closeSideNavIcon.addEventListener('click', () => {
    mobileNav.classList.remove("nav-active");
});