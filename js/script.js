let click = navigator.userAgent.match(/ios|android|ipad/i)
  ? "touchstart"
  : "click";

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener(click, handlerClick);
});

function handlerClick(e) {
  if (e.target.matches("#menu-icon")) toggleMenu();
  if (e.target.matches("#nav-res ul li a")) toggleMenu();
}

function toggleMenu() {
  let $menuIcon = document.getElementById("menu-icon");
  $menuIcon.parentNode.classList.toggle("res");
}
