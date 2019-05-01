"use strict";

$(document).ready(function () {
  $('#testimonialsSlider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    // cssEase: 'ease-in-out',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
  }); // testimonials slider

  $('#ingredientsDesc').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#ingredientsSlider'
  });
  $('#ingredientsSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '#ingredientsDesc',
    dots: false,
    focusOnSelect: true
  });
}); //doc ready

var hello = function hello(name) {
  return "hello ".concat(name);
};
//# sourceMappingURL=vsc.js.map
