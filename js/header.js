function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  if (menu.style.maxHeight === '0px' || menu.style.maxHeight === '') {
      menu.style.maxHeight = '240px';
  } else {
      menu.style.maxHeight = '0px';
  }

  hamburgerMenu.classList.toggle('open');
}