// open header responsive navbar

const openNavbarBtn = document.querySelector(".menu-bar");
const resNavbar = document.querySelector(".responsive-nav");
const headerOverlay = document.querySelector(".header-overlay");
const closeNavBtn = document.querySelector(".close-nav");
const catMobile = document.querySelector(".cat-mobile");

const openNavFun = function () {
    resNavbar.classList.add("show-cat");
    headerOverlay.classList.remove("hidden");
};

const closeNavFun = function () {
    resNavbar.classList.remove("show-cat");
    headerOverlay.classList.add("hidden");
};

openNavbarBtn.addEventListener("click", openNavFun);
closeNavBtn.addEventListener("click", closeNavFun);
headerOverlay.addEventListener("click", closeNavFun);
catMobile.addEventListener("click", openNavFun);
