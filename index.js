const hamButton = document.querySelector('.burger_menu_button');
const offScreenMenu = document.querySelector('.off_screen_menu');

hamButton.addEventListener('click', () => {
  offScreenMenu.classList.toggle('active');
  hamButton.classList.toggle('close');
});
