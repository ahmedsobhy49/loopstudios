const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");
const showMenu = document.querySelector("#show-menu");
closeIcon.addEventListener("click", function () {
  mobileNav.classList.add("hidden");
});

showMenu.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});
