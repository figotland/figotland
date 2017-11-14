var root = document.documentElement;
var header = document.querySelector('#header');
var menu = document.querySelector('#menu');
var nav = document.querySelector('#main-nav');
var footer = document.querySelector('#sub-nav');
var animated = document.querySelectorAll('.animated');

sr.reveal('.image-wrap', {
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
      $(domEl).addClass("image-active")
    } else {
      $img.on("load", function(e) {
        $(domEl).addClass("image-active")
      })
    }
  }
});

sr.reveal('.post--is-preview', {
  scale: 1,
  duration: 500
});

sr.reveal('.sr-up-1', {
  scale: 1,
  duration: 500,
  delay: 150
});

sr.reveal('.sr-up-2', {
  scale: 1,
  duration: 500,
  delay: 250,
});

sr.reveal('.i1, .c1, .i3, .c3', {
  duration: 500,
  origin: 'left',
  scale: 1,
});

sr.reveal('.i2, .c2', {
  scale: 1,
  duration: 500,
  opacity: 0,
});

sr.reveal('.sr-left', {
  duration: 500,
  origin: 'left',
  scale: 1,
}, 100);

sr.reveal('.sr-up', {
  scale: 1,
  duration: 500,
  opacity: 0,
}, 250);

sr.reveal('.sr-hero-1', {
  scale: 1,
  duration: 750,
  opacity: 0,
}, 250);

sr.reveal('.sr-hero-2', {
  scale: 1,
  duration: 750,
  opacity: 0,
}, 250);

menu.onclick = function() {
  root.classList.toggle('noscroll');
  menu.classList.toggle('active');
  header.classList.toggle('header--is-active');
  nav.classList.toggle('nav--is-active');
  // for(var i = 0; i < items.length; i++) {
  //   items[i].classList.toggle('slideIn');
  // }
  // footer.classList.toggle('slideUp');
}

var accordion = document.querySelectorAll('.accordion');

for(i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("accordion--is-expanded");
  }
}