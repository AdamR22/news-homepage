const shadeOver = document.querySelector("body, body > *:not(.mobile-nav)");
const header = document.querySelector("header");
const sideNavIcon = document.querySelector(".side-nav-icon");
const closeSideNavIcon = document.querySelector(".side-nav-close");
const mobileNav = document.querySelector(".mobile-nav");

function openSideNav() {
    mobileNav.style.setProperty("transform", "translateX(0%)");

    shadeOver.style.setProperty("background-color", "hsla(240, 100%, 5%, 0.5)");
    shadeOver.style.setProperty("transition", "background-color 0.5s ease-in");

    header.style.setProperty("background-color", "hsla(240, 100%, 5%, 0)");
    header.style.setProperty("transition", "background-color 0.5s ease-in");
}

function closeSideNav() {
    mobileNav.style.setProperty("transform", "translateX(100%)");

    shadeOver.style.setProperty("background-color", "transparent");
    shadeOver.style.setProperty("transition", "background-color 0.5s ease-in");

    header.style.setProperty("background-color", "hsl(36, 100%, 99%)");
    header.style.setProperty("transition", "background-color 0.5s ease-in");
}

sideNavIcon.addEventListener('click', openSideNav, false);
sideNavIcon.addEventListener('keypress', openSideNav, false);


closeSideNavIcon.addEventListener('click', closeSideNav, false);
closeSideNavIcon.addEventListener('keypress', closeSideNav, false);