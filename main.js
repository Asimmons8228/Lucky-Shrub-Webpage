const logo = document.getElementById("logo");
const navButtons = document.querySelectorAll(".navbuttons");

// When you hover over the logo, show the navigation buttons
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

// When you move the cursor away from the logo, keep the navigation buttons displayed
logo.addEventListener("mouseleave", function () {
    navButtons.forEach(function (button) {
        button.style.opacity = 1;
        button.style.pointerEvents = "auto";
    });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function startSlideshow() {
    setTimeout(function() {
      plusDivs(1); // Advance to the next slide
      startSlideshow(); // Call this function again for the next slide
    }, 4000); // 1-second interval
  }
  

  startSlideshow();