"use strict";

/* Adding event on multiple elements */

const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
};

/* Loading */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

/* Navigation Bar Toggle for Mobile Devices */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElements(navbarLinks, "click", closeNavbar);

/* Header Section */

// The Header will be active after scrolling for 200px

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", headerActive);

/* Scroll Reveal */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

/*Swiper*/
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar Swiper cuando el contenido de la página esté cargado
  var mySwiper = new Swiper(".testimonials.swiper-container", {
    // Opciones de configuración
    slidesPerView: 1, // Cantidad de diapositivas visibles a la vez
    spaceBetween: 30, // Espacio entre diapositivas
    loop: true, // Repetir el carrusel desde el inicio después de la última diapositiva
    autoplay: {
      delay: 5000, // Intervalo de tiempo entre cada transición (en milisegundos)
    },
    pagination: {
      el: ".swiper-pagination", // Selector del elemento donde se mostrará la paginación
    },
  });
});
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
