"use strict";

const randomNumber = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        const clicked = e.currentTarget.classList;
        const number = Math.trunc(Math.random() * 30) + 1;

        if (clicked.contains("check") && number % 2 === 0) {
            randomNumber.textContent = number;
            randomNumber.style.color = "red";
            displayMessage(`Number ${number} is even!`);
        } else if (clicked.contains("check") && number % 2 !== 0) {
            randomNumber.textContent = number;
            randomNumber.style.color = "blue";
            displayMessage(`Number ${number} is odd!`);
        } else if (clicked.contains("reset")) {
            randomNumber.textContent = "?";
            randomNumber.style.color = "#112A46";
            displayMessage(`Please press the button "Check!"`);
        }
    });
});