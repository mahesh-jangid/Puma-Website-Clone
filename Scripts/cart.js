let bagarr = JSON.parse(localStorage.getItem("bagItems")) || [];
showBagItems(bagarr);

console.log(bagarr);
let cart_count = document.querySelector("#cart-count");
cart_count.innerHTML = `(${bagarr.length})`;

function showBagItems(bagarr) {
  bagarr.map(function (elem, index) {
    let DOM_cont = document.querySelector(".wrapper");

    let htmldata = `  <div id="item-design">
            <div id="cart-image">
              <img
                id="item-image"
                src="${elem.image}"
              />
            </div>
            <div id="cart-item-details">
              <h3>${elem.brand_info}</h3>
              <p class="black">Color:<span> Puma Royal</span></p>
              <p class="black">Size:<span>L</span></p>
              <p class="black">Style_Number:<span>586676_58</span></p>
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div id="cart-item-price">
              <!-- <i class="fas fa-rupee-sign"></i>
                        <i class="fas fa-rupee-sign"></i> -->
              <p id="discount-price">Rs ${elem.price}</p>
              <p id="original-price">Rs ${elem.strick_price}</p>
              <div id="cart-icons">
                <a href=""><i class="far fa-trash-alt"></i></a>
                <a href=""><i class="far fa-edit"></i></a>
              </div>
            </div>
          </div>`;

    DOM_cont.insertAdjacentHTML("afterbegin", htmldata);

    let deleteBtn = DOM_cont.querySelectorAll(".fa-trash-alt");
    deleteBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        deleteBagItem(index);
        totalBagitems();
      });
    });
  });
}
function deleteBagItem(index) {
  bagarr.splice(index, 1);
  localStorage.setItem("bagItems", JSON.stringify(bagarr));
  showBagItems(bagarr);
  window.location.href = "cart.html";
}
var total_amount = [];
var DOM_total = document.querySelector(".grand_total");
var actual_total = document.querySelector(".price-span");
var total_sub = document.querySelector(".Shipping");

bagarr.map(function (elem) {
  total_amount.push(elem.price);
  total_sub.textContent = elem.strick_price;
  console.log(total_sub);
  actual_total.innerHTML = `Rs ${elem.price}`;
});

var total_amt = total_amount.reduce(function (total, price) {
  total += price;
  return total;
}, 0);

localStorage.setItem("TotalMRP", JSON.stringify(total_amt));
DOM_total.innerHTML = `Rs ${total_amt - total_sub.textContent}`;
bagarr.map(function (el) {
  console.log(el.price);
  document.querySelector("#quantity").addEventListener("change", function () {
    let prod_name = document.querySelector(".prod-name");
    let prod_actual_price = document.querySelector("#discount-price");
    let prod_strick_price = document.querySelector("#original-price");
    let prod_image = document.querySelector("#item-image");
    let quantity = document.querySelector("#quantity").value;
    let new_price = el.price * quantity;
    let new_strick_price = el.strick_price * quantity;
    prod_actual_price.textContent = `Rs ${new_price}`;
    prod_strick_price.textContent = `Rs ${new_strick_price}`;

    let updated = {
      image: el.image,
      price: el.price,
      strick_price: el.strick_price,
      brand_info: el.brand_info,
    };
    wishListArray.push(updated);
    localStorage.setItem("WishListItems", JSON.stringify(wishListArray));
  });
});

const checkoutBtn = document.querySelector("#checkout");
checkoutBtn.addEventListener("click", function () {
  window.location.href = "checkout.html";
});
