const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector(".navbar");
const nestedMenus = document.querySelectorAll(".nested-menu");

openNav.addEventListener("click", () => {
  nav.classList.add("active");
});
closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
});
nestedMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
  });
});
