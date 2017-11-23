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

// sr.reveal('.main-nav .nav__item', {
//   duration: 1000,
//   delay: 2000,
//   origin: 'left',
//   scale: 1,
//   easing: 'cubic-bezier(.75, 0, .25, 1)',
// }, 100);

sr.reveal('.post--is-preview', {
  duration: 500,
  scale: 1,
  viewFactor: 0.1,
});

sr.reveal('.related-post', {
  duration: 500,
  scale: 1,
});

sr.reveal('.sr-up-1', {
  duration: 500,
  delay: 150,
  mobile: false,
  scale: 1,
});

sr.reveal('.sr-up-2', {
  duration: 500,
  delay: 250,
  mobile: false,
  scale: 1,
});

sr.reveal('.i1, .c1, .i6, .c6, .i7, .c7', {
  duration: 500,
  mobile: false,
  origin: 'left',
  scale: 1,
});

sr.reveal('.i2, .c2, .i4, .c4, .i8, .c8', {
  duration: 500,
  mobile: false,
  origin: 'bottom',
  scale: 1,
});

sr.reveal('.i3, .c3, .i5, .c5, .i9, .c9', {
  duration: 500,
  mobile: false,
  origin: 'right',
  scale: 1,
});

sr.reveal('.sr-left', {
  duration: 500,
  origin: 'left',
  scale: 1,
}, 100);

sr.reveal('.sr-up', {
  duration: 500,
  opacity: 0,
  scale: 1,
}, 250);

sr.reveal('.sr-hero-1', {
  duration: 750,
  opacity: 0,
  scale: 1,
}, 250);

sr.reveal('.sr-hero-2', {
  duration: 750,
  opacity: 0,
  scale: 1,
}, 250);

menu.onclick = function() {
  root.classList.toggle('noscroll');
  menu.classList.toggle('active');
  header.classList.toggle('header--is-active');
  nav.classList.toggle('nav--is-active');
}

var accordion = document.querySelectorAll('.accordion');

for(i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("accordion--is-expanded");
  }
}