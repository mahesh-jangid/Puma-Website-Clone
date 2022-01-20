import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
const DOM_footer = document.querySelector("#footer");
DOM_footer.innerHTML = footer();
const DOM_navbar = document.querySelector(".navbar");
DOM_navbar.innerHTML = navbar();

/// --------------- To Fix The Nav --------------------  //////

function fixedNav() {
  const navHeight = document.documentElement.clientHeight;

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > navHeight) {
      DOM_navbar.classList.add("nav-fixed");
    } else {
      DOM_navbar.classList.remove("nav-fixed");
    }
  };
}
/// --------------- To Fix Filter section --------------------  //////

function fixedfilter() {
  const DOM_filter_cont = document.querySelector(".filter_cont");
  const navHeight = document.documentElement.clientHeight;

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > navHeight) {
      DOM_filter_cont.classList.add("filter_fixed");
    } else {
      DOM_filter_cont.classList.remove("filter_fixed");
    }
  };
}

// ------------------------ Slider --------------------------------------///////

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("hide_loader");
  slideritemShow();
  fixedNav();
});

const slider_left_btn = document.querySelector(".fa-chevron-circle-left");
const slider_right_btn = document.querySelector(".fa-chevron-circle-right");
slider_left_btn.addEventListener("click", leftBtn);

slider_right_btn.addEventListener("click", rightBtn);
let left = 5;
let right = 8;

function slideritemShow() {
  for (let i = left; i <= right; i++) {
    document.getElementById("item" + i).style.display = "inline-block";
  }
}

function leftBtn() {
  if (left <= 4 && right <= 8) {
    document.getElementById("item" + left).style.display = "none";
    left += 1;
    right += 1;

    for (let i = left; i <= right; i++) {
      document.getElementById("item" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}
function rightBtn() {
  if (left >= 2 && right >= 5) {
    document.getElementById("item" + right).style.display = "none";
    left -= 1;
    right -= 1;

    for (let i = left; i <= right; i++) {
      document.getElementById("item" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

// ------------------------ End of Slider --------------------------------------///////
