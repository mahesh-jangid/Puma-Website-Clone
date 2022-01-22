   // this line for hiding heading part start here
   document.querySelector(".description-name-icon").addEventListener("click", hideDes)

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

   document.querySelector(".reviews-name-icon").addEventListener("click", hideRev)

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

   document.querySelector(".ship-return-name-icon").addEventListener("click", hideShipRet)

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