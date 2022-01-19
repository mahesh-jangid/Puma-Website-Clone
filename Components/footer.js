function footer() {
  return ` <div class="footer_info">
        <div class="left">
          <div class="left_1">
            <h2>Support</h2>
            <div class="footer_links">
              <ul>
                <li><a href="">Contact Us</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Promotions & Sale</a></li>
                <li><a href="">My Account</a></li>
                <li><a href="">Track Order</a></li>
              </ul>
              <ul>
                <li><a href="">Return Policy</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & consitions</a></li>
                <li><a href="">Initiate Return</a></li>
              </ul>
            </div>
          </div>
          <div class="left_2">
            <h2>About PUMA</h2>
            <div class="footer_links">
              <ul>
                <li><a href="">Company</a></li>
                <li><a href="">Corporate News</a></li>
                <li><a href="">Press Center</a></li>
              </ul>
              <ul>
                <li><a href="">Investors</a></li>
                <li><a href="">Sustainability</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Store Finder</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <h2>More Inspiration</h2>
          <div class="social_icons">
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-pinterest"></i></a>
            <a href=""><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-linkedin"></i></a>
          </div>
          <hr />
          <div class="company d-flex">
            <div class="company_logo">
              <img
                src="https://in.puma.com/on/demandware.static/-/Sites-IN-Library/default/dwe13dbf96/web-components/pumatrac-logo.svg"
                alt=""
              />
            </div>
            <div class="info">
              <p>TRAIN WITH THE FASTEST</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hr_line">
        <hr />

        <div class="about_company d-flex">
          <select name="country" id="country">
            <option value="india">INDIA</option>
            <option value="US">US</option>
            <option value="Afghanistan">AFGHANISTHAN</option>
            <option value="Albania">ALBANIA</option>
          </select>
          <p class="small p-0 m-0">© PUMA SE, 2021. All Rights Reserved</p>
          <p class="small p-0 m-0">Imprint & Legal Data</p>
        </div>
      </div>`;
}

export default footer;
