function navbar() {
  return `    <div class="nav_info">
        <div class="left">
          <div class="logo d-flex align-items-center justify-content-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////5+fn09PTT09M0NDT8/Pzl5eXQ0NCMjIwvLy/Jycnq6urh4eGcnJy4uLhwcHAYGBgJCQmWlpZ7e3tOTk5kZGSnp6e2trba2tpHR0evr6/R0dE5OTl+fn5eXl6GhoYgICBsbGxYWFglJSU/Pz9KSkoTExNjY2MiIiKvIk9DAAAH+klEQVR4nO2da5eqKhiAMy0btbR72m5ymmbP2f//Dx4tLbkJCIqweD7NWkPFm/DeocnEYrFYLBaLxWKxWCwWi8VisVgsFp3Z7D+2u4D470t4qf76isNhZiSXW+g8CL8IA0LH3T/++Fo6znm4iUkij5yaCC/irfiXm5V/+eWow6DTE+bgOw1i7JjHV+AWizh9DFpuBp6jCPfQAcHtxe3zX35QD/4YfJ6d2U0hAZ0dOuhf/b/XYHc9/FS7cYLlc5wjOspDR2mibIIlOnXM3DFfQ6GSFufdX5LmHQvfyAotWcHDYtyoarGmx2SmYups7ObYWV/BUQFmiQLM0+0F/wGq+STM+A6M2lLkexKtyN6QMkgCesColEnAkkXyq0gSAjvSTD+bo2BbqdGDvOH3YDHN5qiMR8CC+flO+sChybBatCRpDltxSlgQ/6iSCeA3Ik4QGMe+Cxucx2A+iNsLjPx+ughYuHZH5TqHuPiguKLF1Lfj5krkenElaJnoBo7LuwpYsPxPjWwPfn3snKawx/0hIGBBrG47HrETCjOmYRwoW6p73Gy8KzyMzVtrx1NjOTAWIMVsGlxcxc0ciVMGAN1dKSaorxIz4qTw4u+dOzxz0m6R8gwL5kNndGD9cSZF6TL24ZNhd2MA+qPpnjy0s7lHmGK3QU8Aj5CiB4TNxZvTYOnVwG18bIRYCIjEJU6ZF79lsUil+Vj+0DOeM1qKhoNhFE7QUKT45D2MvM3oxEPkkBv6kTWhK1FEv/+M3ObtcrM9wRJsNrgb89516jv5tOB41bbUN3M38kJvScx9MNJ3KeDlkS65tsQsyT+vs/Ilv5e8U17jzaLXzfgKKqYiqlvQSvp9+qkvpSGmuLlSqCg9Ojiz2n4L9hlg40seeouoalMxFcwukDORrLArci42dTi0FX0jfJqHB++fFJEgkurdl6Jv9CXBW/X7CKhqBXGjD21HeB+WuDSvn5+sypHy2PoHl9vHMQ7DOF7dske0vJAhYQ/+zbl6Zy5TGHyGgFqZ+p4nLaKSrFLrzcOjxr5jefEhjpNUCesMG7tHEZxIFUZphBILOLWpYH+EB1EnmwVfXs24NhXfrC8gFfklI0+lVvqP2V/77n2FVsw/6ZNh4VC9H/M3JsciMCFHpVZBnUcf+SQYTkA5+qZWpMzuzG1ICZ2lcMhYJ0l95lcI1kZ5cUU9ydojzZlfAdYspv0bDrHNWFfjCQ3cOIB+qUIBH+K+hVwIWMZXbxDH9wSEDw8bGmzFo8JW3IQ2KRLrOvCd8oRkDX/brR79JmFJ8ad/Ost46piGe+WNuFIHh/cHN0zMnpoA33ZqFKuIOj3Gd+6PL4P4bq4FFndwbEvSPHUioS+XhZg/7/9WiszWvmJfre4p9KHrHXEdetXQQ/egy11xFhobdo1/BdxC13FxReKfFVbrvBuO9gJxpc810UbXFru1Z+JnlYJrEWwsnYkkHHGtLwSae15+ojnYHUM/cudz1/XjHDJnM6FOjpAxQmiWxfo6prS+7LMLzlgHYhWcBcPJsRlQXpAUhXGwFiyQezRfFWwySAcRCkKwguNEqxYfZQaZ5qEaIUCEC+TTcIevsQQrSFuraJ8rOeMnzoPrbZHHsz/B1kjdqV05caa7POeH7L75/V1frnmMWiJP4XFPiT1H8+mUEKimSo9CZrJaHMmoFbAIukRVKlVA9Ucg817zA6O4GuDS42Mcy1ndpK8UyIhOlH/0UajroZAswlZSa/ybhfLTVRCbncRuVae3nhUxsrNED0CNs01nf5a1Wrl7LoZjlse+jGepKqBgIyhcaE/UhjBXtNXxNdsn21McLtKoS5LV1+kKmZL7d378w+XijXudkjhwdPG4YzhT3YH1lllGPR9iCWv+wx2bW8POX0Y9O+SZMdmwPUbegtOoIF5NAqCprnlyZZFQtKdbLSxtPSP2TllguNTBHdOVOB1gOFYm3LeuGHqohbldTivo2kZJXU0m1Eykrr7piws12BhXwq0DVN9mRDnTbgS02HiUOTcuaKVk7VXN5EKRUJ+bVInQ1OlIr6XkgOaeaq9Mq9unyQzfLCQdylU5uvttBff2zNQoysCCtFt9rTMZFbNWCSV3lqqh1WBonFJ80xpEzXs5+z40rYfp9Df5Bd9tEo61GsxH205UeZGoPNruOeh8oGhctARRhkh4J6czDHBMH5DbcU2RkHz1tvaZmhqixTBGQqIDbo6EpNuNzJGQtE4NkpBwQNUkCXE/WmSYhD+4hIZREjbPYL8wIY3RAJd407mrBgPGBde/dAGwxnhvhj3EAC3uR/RXaUWGKlS9G4dQrkisONWgI5qLBHmI/mh+aEoSqIhL3XsyYBJkoVIv0dcNVEQlP4jSJ1dUo3qat/HBZBi7OI4ffZNGgF6VY5gTPtmgPqpmPzZNB4k0DCjqQ9wgfaN5VzSOHzDUEL7Me4wAmzHSvwcMQ3Mzzg0ziU+AfhszCsIQ66bpN6YQ1WTTVDYmdEihNDs1XNWT6QWgjcE4r6YEkNDIZQq6p6albEpACU2LL0qgA2CG5YdLoPK3afnhCforW6blh9Eo0bydCB+KNm+Zwg225j3DC3T6y7x9uIbyiqYl+Cdwk7SJmQywb9FEzzQDJNT/zCUGoJNoLJcpSgWoJ5qXFS5p3gRrWpXtSWL8M2xGUEbuw0nTJpoq4TtbY+Y+LMmr3LeRSeGK5FhiWmuNxWKxWCwWi8VisVgsFovFYrFYuvM/GSxcIIXbTiwAAAAASUVORK5CYII="
              alt="logo image"
            />
          </div>
          <div class="nav_links">
            <ul>
              <li><a href="product.html">Women</a></li>
              <li><a href="men.html">Men</a></li>
              <li><a href="kids.html">Kids</a></li>
              <li><a href="collaborations.html">Collaborations</a></li>
              <li><a href="sport.html">Sport</a></li>
              <li><a href="outlet.html">Outlet</a></li>
            </ul>
          </div>
          <div class="mobo_links">
            <ul>
              <li><a href="product.html">Women</a></li>
              <li><a href="men.html">Men</a></li>
              <li><a href="men.html">Kids</a></li>
              <li><a href="men.html">Beauty</a></li>
            </ul>
          </div>
        </div>
        <div class="right_part">
          <div class="search_bar">
            <span><i class="fas fa-search"></i></span>
            <input type="text" id="search_box" placeholder="Search here...." />
          </div>
          <div class="desktop_actions">
            <div class="wishlist_section desktop_view">
              <div class="icon wishlist_icon">
                <a href="wishlist.html"><i class="far fa-heart"></i></a>
                <span><h5 id="wishlist_items">0</h5></span>
              </div>
              <!-- <div class="title wishlist_title">Wishlist</div> -->
            </div>
            <div class="bag_section desktop_view">
              <div class="icon bag_icon">
                <a href="cart.html"><i class="fas fa-shopping-bag"></i></a>
                <span><h5 id="bag_items">0</h5></span>
              </div>
              <!-- <div class="title bag_title">Bag</div> -->
            </div>
            <div class="profile_section desktop_view">
              <div class="icon user_icon">
                <a><i class="fas fa-user-plus"></i></a>
              </div>
              <!-- <div class="title user_title">Profile</div> -->
            </div>
            <!------------profile Dropdown-------------------->
            <div class="profile_info">
              <div class="profile_links">
                <h6 class="text-dark m-3">QUICKLINKS</h6>
                <ul>
                  <li><a href="account.html">My Account</a></li>

                  <li><a href="whishlist.html">Whishlist</a></li>
                  <li><a href="home.html">Check Order</a></li>

                  <li><a href="">Store Finder</a></li>
                  <li><a href="">Logout</a></li>
                </ul>
                <hr />
                <a href="login.html"><button>Login</button></a>
                <p class="text-dark m-3">
                  <span>Not Account yet ? <a href="login.html">REGISTER HERE</a></span>
                </p>
              </div>
            </div>
          </div>
          <div class="mobile_menu">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>`;
}

export default navbar;
