import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
const DOM_footer = document.querySelector("#footer");
DOM_footer.innerHTML = footer();
const DOM_navbar = document.querySelector(".navbar");
DOM_navbar.innerHTML = navbar();
let totalWishListItems =
  JSON.parse(localStorage.getItem("totalWishListItems")) || 0;

var DOMWishlist = document.querySelector("#wishlist_items");
DOMWishlist.textContent = totalWishListItems;
// totalWishListitems();
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

// -------------Profile Card---------------////
var profile_icon = document.querySelector(".user_icon");
var profile_info = document.querySelector(".profile_info");

profile_icon.addEventListener("click", function () {
  if (profile_info.classList.contains("show_profile")) {
    profile_info.classList.remove("show_profile");
  } else {
    profile_info.classList.add("show_profile");
  }
});
// -------------End of Profile Card---------------////

// --------------------Mobile Links -----------------//
var mobile_menu = document.querySelector(".mobile_menu i");
mobile_menu.addEventListener("click", function () {
  var mobo_links = document.querySelector(".mobo_links");
  mobo_links.classList.toggle("show_mobo_link");
});
// --------------------Mobile Links -----------------//
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

// function totalWishListitems() {
//   var TotalWishListItem = updatedProd.length;
//   console.log(TotalWishListItem);

//   DOMWishlist.textContent = TotalWishListItem;
//   localStorage.setItem("totalWishListItems", JSON.stringify(TotalWishListItem));
// }
// ------------------------ End of Slider --------------------------------------///////
