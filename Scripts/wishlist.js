
import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";

let nav = document.querySelector(".navbar")

let foot = document.querySelector("#footer")

nav.innerHTML = navbar()

foot.innerHTML = footer()

