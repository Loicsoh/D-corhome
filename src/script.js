// script de slider
 const image = [
  "/images/template/0bc16e52ee2d2336569d508a7c697e64.jpg",
  "/images/template/2e53a5ce9664dee4a2177bee61716893.jpg",
  "/images/template/95b9a7760166dbe7190c301a57fdc2aa.jpg"
 ];
 const imgElement = document.getElementById("imag");

 let currentIndex = 0;

 setInterval(() => {
  imgElement.src = image[currentIndex];
  currentIndex = (currentIndex + 1) % image.length;
 }, 3000);

// const images = [
//   "/images/template/0bc16e52ee2d2336569d508a7c697e64.jpg",
//   "/images/template/2e53a5ce9664dee4a2177bee61716893.jpg",
//   "/images/template/95b9a7760166dbe7190c301a57fdc2aa.jpg"
// ];

// let currentIndex = 0;
// const carouselImage = document.getElementById("carousel-image");
// const leftButton = document.getElementById("left");
// const rightButton = document.getElementById("right");

// setInterval(() => {
//   function displayImage() {
//     carouselImage.src = images[currentIndex];
//   }
  
//   leftButton.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     displayImage();
//   });
  
  
//   rightButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1 ) % images.length;
//     displayImage();
//   });
//   displayImage();
// }, 3000);

// script navbar
const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggleMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelectorAll('#main-nav ul a');

toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
  toggleMenu.classList.toggle('-translate-y-full');

  if(toggleMenu.classList.contains('-translate-y-full')) {
    toggleMenuImg.setAttribute("src", "/images/icones/1738779663792.jpg");
    toggleMenuBtn.setAttribute("aria-expaned", "false");
  }
  else{
    toggleMenuImg.setAttribute("src", "/images/icones/remove_delete_exit_close_1545.png");
    toggleMenuBtn.setAttribute("aria-expaned", "true");
  }
}

