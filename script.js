"use strict";

// MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const overlayEl = document.querySelector(".overlay");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  overlayEl.classList.toggle("hidden");
});
