var sidenav = document.querySelector(".side-navbar");

  function showNavbar() {
    sidenav.style.left = "0";
  }

  function closeNavbar() {
    sidenav.style.left = "-100%";
  }

  // Ensure closeNavbar function is accessible globally
  window.closeNavbar = closeNavbar;