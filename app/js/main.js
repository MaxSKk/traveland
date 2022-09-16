
//Проверка поддержки webp
function isWebp() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

const site = isWebp();

//меню бургер
$(function () {
   $('.nav__burger').on('click', function () {
      $('.nav__burger, .nav__list').toggleClass('active');
      $('body').toggleClass('lock');
   });

   //слайдер
   $('.offers__slider').slick({
      dots: true,
      infinite: false,
      variableWidth: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 2,
      appendArrows: $('.offers__slider-controls'),
      appendDots: $('.offers__slider-controls')
   });
});

