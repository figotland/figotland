var root = document.documentElement;
var header = document.querySelector('#header');
var menu = document.querySelector('#menu');
var items = document.querySelectorAll('.nav__item');
var footer = document.querySelector('#sub-nav');
var animated = document.querySelectorAll('.animated');

window.sr = ScrollReveal();
sr.reveal('.wrap', {
  scale: 0,
  opacity: 1,
  duration: 0,
  distance: 0,
  delay: 0,
  viewFactor: 0,
  easing: "cubic-bezier(0.46, 0.51, 0.15, 1.04)",
  beforeReveal: function(domEl) {
    var $img = $(domEl).find("img");
    if ($img.prop("complete")) {
      $(domEl).addClass("aktiv")
    } else {
      $img.on("load", function(e) {
        $(domEl).addClass("aktiv")
      })
    }
  }
});

sr.reveal('.post__title', {
  scale: 0,
  opacity: 1,
  duration: 0,
  distance: 0,
  delay: 0,
  viewFactor: 0,
  easing: "cubic-bezier(0.46, 0.51, 0.15, 1.04)",

});

menu.onclick = function() {
  root.classList.toggle('noscroll');
  menu.classList.toggle('active');
  header.classList.toggle('header--is-active');
  for(var i = 0; i < items.length; i++) {
    items[i].classList.toggle('slideIn');
  }
  footer.classList.toggle('slideUp');
}

var accordion = document.querySelectorAll('.accordion');

for(i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("accordion--is-expanded");
  }
}