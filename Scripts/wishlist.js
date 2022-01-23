import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";

let nav = document.querySelector(".navbar");

let foot = document.querySelector("#footer");

nav.innerHTML = navbar();

foot.innerHTML = footer();
let updatedProd = JSON.parse(localStorage.getItem("WishListItems")) || [];
console.log(updatedProd);
showWishlistItems(updatedProd);
totalWishListitems();
function totalWishListitems() {
  var DOMWishlist = document.querySelector("#wishlist_items");

  var TotalWishListItem = updatedProd.length;
  console.log(TotalWishListItem);

  DOMWishlist.textContent = TotalWishListItem;
  localStorage.setItem("totalWishListItems", JSON.stringify(TotalWishListItem));
}
let bagarr = JSON.parse(localStorage.getItem("bagItems")) || [];
function showWishlistItems(updatedProd) {
  // document.querySelector("#wishlist").innerHTML = "";
  updatedProd.map(function (elem, index) {
    let DOM_wishlist_cont = document.querySelector("#wishlist");

    let htmlData = ` <div id="show">
        <img class = "image"
          src="${elem.image}"
          alt=""
        />
        <div id="text">
          <div>
            <h3 class = "brand" >${elem.brand_info}</h3>
            <div class="price">
              <h3 class="actual_price" style="color: red">Rs ${elem.price}</h3>
              <h3 class="strick_price" style="color: gray">Rs ${elem.strick_price}</h3>
            </div>
          </div>
          <div id="lower">
            <div>
              <p>color : balck</p>
              <p>size : XL</p>
              <p>Style Numebr : 1234343</p>
            </div>
            <div>
              <i class="far fa-edit"></i>
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
           <div class="quantity-div">
                <select name="" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
          <button id="two" class="cart">ADD TO CART</button>
        </div>
        </div>`;

    DOM_wishlist_cont.insertAdjacentHTML("afterbegin", htmlData);
    console.log(DOM_wishlist_cont);
    let deleteBtn = DOM_wishlist_cont.querySelectorAll(".fa-trash-alt");
    let cartBtn = DOM_wishlist_cont.querySelectorAll(".cart");
    deleteBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        deleteProd(index);
        totalWishListitems();
      });
    });

    cartBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        addinbag(elem);
        window.location.href = "cart.html";
      });
    });
    // cartBtn.forEach(function (btn) {
    //   btn.addEventListener("click", function () {
    //     addinbag(elem);
    //   });
    // });
    document.getElementById("two").onclick = () => {
      addinbag(elem);
    };
  });
}
function deleteProd(index) {
  updatedProd.splice(index, 1);
  localStorage.setItem("WishListItems", JSON.stringify(updatedProd));
  showWishlistItems(updatedProd);
  window.location.href = "wishlist.html";
}
function addinbag(elem) {
  bagarr.push(elem);

  localStorage.setItem("bagItems", JSON.stringify(bagarr));
  bagarr = [];

  console.log("cliked bag button");
}
