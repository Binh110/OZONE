// Animation

new
WOW().init();


// Click to scroll
$("a").on('click', function (event) {

 if (this.hash !== "") {
   event.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function () {

     window.location.hash = hash;
   });
 } // End if
});

// Slick-slider

// Menu 

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-menu");
  const navLinks = document.querySelectorAll(".main-menu li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();