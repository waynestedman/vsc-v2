function initComparisons() {
var x, i;
x = document.getElementsByClassName("img-comp-overlay");
for (i = 0; i < x.length; i++) {
  compareImages(x[i]);
}
function compareImages(img) {
  var sliderWrapper, slider, sliderText, img, clicked = 0, w, h;
  var node = document.createTextNode("slide to reveal");
  w = img.offsetWidth;
  h = img.offsetHeight;
  img.style.width = (w / 2) + "px";
  sliderWrapper = document.createElement("DIV");
  sliderWrapper.setAttribute("id", "slider-wrapper");
  slider = document.createElement("DIV");
  slider.setAttribute("id", "img-comp-slider");
  sliderWrapper.appendChild(slider);
  sliderText = document.createElement("P");
  sliderText.setAttribute("id", "slider-text");
  sliderText.appendChild(node);
  sliderWrapper.appendChild(sliderText);
  img.parentElement.insertBefore(sliderWrapper, img);
  sliderWrapper.style.top = (h / 2) - (sliderWrapper.offsetHeight / 2) + "px";
  sliderWrapper.style.left = (w / 2) - (sliderWrapper.offsetWidth / 2) + "px";
  sliderWrapper.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish);
  sliderWrapper.addEventListener("touchstart", slideReady);
  window.addEventListener("touchstop", slideFinish);
  function slideReady(e) {
    e.preventDefault();
    clicked = 1;
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
  }
  function slideFinish() {
    clicked = 0;
  }
  function slideMove(e) {
    var pos;
    if (clicked == 0) return false;
    pos = getCursorPos(e)
    if (pos < 0) pos = 0;
    if (pos > w) pos = w;
    slide(pos);
  }
  function getCursorPos(e) {
    var a, x = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    x = x - window.pageXOffset;
    return x;
  }
  function slide(x) {
    img.style.width = x + "px";
    sliderWrapper.style.left = img.offsetWidth - (sliderWrapper.offsetWidth / 2) + "px";
  }
} /* compareImages */
} /* initComparisons */

$(document).ready(function(){
  initComparisons();
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
}); //doc ready

const hello = (name) => {
    return `hello ${name}`;
};
