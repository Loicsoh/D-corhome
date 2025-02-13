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