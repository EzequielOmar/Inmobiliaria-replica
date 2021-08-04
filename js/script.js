let click = navigator.userAgent.match(/ios|android|ipad/i)
  ? "touchstart"
  : "click";

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener(click, handlerClick);
});

function handlerClick(e) {
  if (e.target.matches("#menu-icon div")) toggleMenu();
  if (e.target.matches("#nav-res ul li a")) {
    moveScroll(e);
    toggleMenu();
  }
}

function moveScroll(e) {
  document.location.hash = "#" + e.target.name;
}

function toggleMenu() {
  let $menuIcon = document.getElementById("menu-icon");
  $menuIcon.parentNode.classList.toggle("res");
}
