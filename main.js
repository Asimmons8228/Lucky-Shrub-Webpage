const logo = document.getElementById("logo");
const navButtons = document.querySelectorAll(".navbuttons");

logo.addEventListener("mouseenter", function () {
  navButtons.forEach(function (button) {
    button.style.opacity = 1;
    button.style.pointerEvents = "auto";
  });
  if (!buttonsDisplayed) {
    logo.classList.add("no-spin");
    buttonsDisplayed = true;
  }
});

logo.addEventListener("mouseleave", function () {
  navButtons.forEach(function (button) {
    button.style.opacity = 1;
    button.style.pointerEvents = "auto";
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
function startSlideshow() {
  setTimeout(function () {
    plusDivs(1);
    startSlideshow();
  }, 4000);
}

startSlideshow();
