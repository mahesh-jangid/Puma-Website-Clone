import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
const DOM_footer = document.querySelector("#footer");
DOM_footer.innerHTML = footer();
const DOM_navbar = document.querySelector(".navbar");
DOM_navbar.innerHTML = navbar();
