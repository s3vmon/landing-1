const themeSwitch = document.querySelector(".theme").children;
const themeBtn = document.querySelector(".theme");
const html = document.getElementById("html");

let index = 0;

const nextTheme = function () {
    if (index === themeSwitch.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeTheme();
};

const changeTheme = function () {
    for (let i = 0; i < themeSwitch.length; i++) {
        themeSwitch[i].classList.remove("hidden");
    }
    themeSwitch[index].classList.add("hidden");
    if (index === 1) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
};

themeBtn.addEventListener("click", nextTheme);
