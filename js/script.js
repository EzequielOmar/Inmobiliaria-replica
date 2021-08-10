let click = navigator.userAgent.match(/ios|android|ipad/i)
  ? "touchstart"
  : "click";

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener(click, handlerClick);
});

function handlerClick(e) {
  if (e.target.matches("#responsive-div div div")) toggleMenu();
  if (e.target.matches("#nav-res ul li a")) {
    moveScroll(e);
    if (document.getElementById("responsive-div").classList.contains("res"))
      toggleMenu();
  }
}

function moveScroll(e) {
  document.location.hash = "#" + e.target.name;
}

function toggleMenu() {
  let $div = document.getElementById("responsive-div");
  $div.classList.toggle("res");
}
