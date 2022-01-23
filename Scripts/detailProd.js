import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
const DOM_footer = document.querySelector("#footer");
DOM_footer.innerHTML = footer();
const DOM_navbar = document.querySelector(".navbar");
DOM_navbar.innerHTML = navbar();

// this line for hiding heading part start here
document
  .querySelector(".description-name-icon")
  .addEventListener("click", hideDes);

function hideDes() {
  let display = document.querySelector(".prod-description");

  if (display.style.display === "none") {
    display.style.display = "inline-block";
    document.querySelector(".description-icon").innerHTML = "-";
  } else {
    display.style.display = "none";
    document.querySelector(".description-icon").innerHTML = "+";
  }
}
// end here

// this line for hiding reviews part start here

document.querySelector(".reviews-name-icon").addEventListener("click", hideRev);

function hideRev() {
  let display = document.querySelector(".prod-review");

  if (display.style.display === "none") {
    display.style.display = "inline-block";
    document.querySelector(".rev-span").innerHTML = "-";
  } else {
    display.style.display = "none";
    document.querySelector(".rev-span").innerHTML = "+";
  }
}
// end here

// this line for hiding shipping return box part start here

document
  .querySelector(".ship-return-name-icon")
  .addEventListener("click", hideShipRet);

function hideShipRet() {
  let display = document.querySelector(".prod-ship-return");

  if (display.style.display === "none") {
    display.style.display = "inline-block";
    document.querySelector(".ship-return-icon").innerHTML = "-";
  } else {
    display.style.display = "none";
    document.querySelector(".ship-return-icon").innerHTML = "+";
  }
}
// end here

let detailProd = JSON.parse(localStorage.getItem("FullDetailProduct")) || [];

let wishListArray = JSON.parse(localStorage.getItem('wishlistItems'))||[];

let prod_name = document.querySelector(".prod-name");
let prod_actual_price = document.querySelector(".prod-price span");
let prod_strick_price = document.querySelector(".strick-price span");
let prod_image = document.querySelector(".product-img1");

prod_name.innerHTML = `${detailProd.brand_info}`;
prod_actual_price.innerHTML = `${detailProd.price}`;
prod_strick_price.innerHTML = `${detailProd.strick_price}`;
prod_image.src = `${detailProd.image}`;

let wishlistBtn = document.querySelector(".wish-list-btn");
wishlistBtn.addEventListener("click", function () {
  wishListArray.push(detailProd);
  localStorage.setItem("wishlistItems", JSON.stringify(wishListArray));
  window.location.href = "wishlist.html";
});

// document.querySelector("#quantity").addEventListener("change", function () {
//   let quantity = document.querySelector("#quantity").value;
//   let new_price = detailProd.price * quantity;
//   let new_strick_price = detailProd.strick_price * quantity;

//   let updated = {
//     image : detailProd.image
//   }
// });
