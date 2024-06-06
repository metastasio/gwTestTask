const hamButton = document.querySelector('.burger_menu_button');
const offScreenMenu = document.querySelector('.drop_down_menu');
const sliderPrew = document.querySelector('.rent_brands_slider_left_arrow');
const sliderNext = document.querySelector('.rent_brands_slider_right_arrow');

hamButton.addEventListener('click', () => {
  offScreenMenu.classList.toggle('active');
  hamButton.classList.toggle('close');
});

