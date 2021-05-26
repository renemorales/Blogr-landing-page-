(function () {
  ("use strict");

  // change the navbar background color when scrolling
  window.addEventListener("scroll", function () {
    let header__navbar = document.querySelector(".header__navbar");
    let windowPosition = window.scrollY > 0;

    header__navbar.classList.toggle(
      "header__navbar-scrolling-active",
      windowPosition
    );
  });
})();
