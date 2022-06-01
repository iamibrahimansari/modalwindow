"use strict";

const modalWindow = document.querySelector(".modal-window");
const btn = document.querySelectorAll(".btn");
const cross = document.querySelector(".cross");

const openModal = function () {
    modalWindow.classList.remove("window");
};

const closeModal = function () {
    modalWindow.classList.add("window");
};

for (let i = 0; i < btn.length; i++)
    btn[i].addEventListener("click", openModal);

cross.addEventListener("click", closeModal);

document.addEventListener("keyup", function (event) {
    if (event.key == "Enter" && !modalWindow.classList.contains("window")) {
        closeModal();
    }
});
