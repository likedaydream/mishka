"use strict";


// Navigation
var nav = document.querySelector(".nav");

if (nav) {
  var navToggle = document.querySelector(".nav__toggle");

  // Default open mobile menu
  nav.classList.remove('nav--no-js', 'nav--opened');
  nav.classList.add('nav--closed');

  navToggle.addEventListener("click", function() {
    if (nav.classList.contains('nav--opened')) {
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
    } else {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
    }
  });
}


// Map
var map = document.querySelector(".map");

if (map) {
  map.classList.add("map--has-js");
}


// Modal overlay
var modalOverlay = document.querySelector(".modal-overlay");

function modalOverlayShow() {
  modalOverlay.classList.add("modal-overlay--show");
}

function modalOverlayHide() {
  modalOverlay.classList.remove("modal-overlay--show");
}

function modalActiveHide() {
  document.querySelector(".modal--show").classList.remove("modal--show");
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", function (e) {
    e.preventDefault();

    modalOverlayHide();
    modalActiveHide();
  });
}


// Modal
var modalBtns = document.querySelectorAll("[data-modal]");

for (var i = 0; i < modalBtns.length; i++) {
  var item = modalBtns[i];
  item.addEventListener("click", function (e) {
    e.preventDefault();

    modalOverlayShow();

    var modalId = item.getAttribute("data-modal");
    var modal = document.querySelector(modalId);

    if (modal) {
      modal.classList.add("modal--show");
    }
  });
}


// Cart add
var cartAddBtn = document.querySelector(".js-cart-add-btn");

if (cartAddBtn) {
  cartAddBtn.addEventListener("click", function (e) {
    e.preventDefault();

    modalOverlayHide();
    modalActiveHide();
  });
}

// Swiper
var mySlider = document.querySelector(".swiper-container");

if (mySlider) {
  var mySwiper = new Swiper(mySlider, {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews__control--next",
      prevEl: ".reviews__control--prev",
    }
  });
}
