
var swiper = new Swiper('.swiper', {
  loop: true,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoHeight:true,
  autopxlay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

var swiper = new Swiper('.swiper-mini', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});


var swiper = new Swiper(".insaneSwiper", {
  loop: true,
  effect: "fade",
  autoHeight:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index < 9 ? '0' : '') + (index + 1) + "</span>";
    },
  },
  autoщplay: {
    delay: 2500,
    disableOnInteraction: false
  },
});








document.addEventListener("DOMContentLoaded", function () {
  var elementsToAnimate = document.querySelectorAll('.hidden');

  function isElementPartiallyInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
      rect.bottom >= 0 &&
      rect.top <= windowHeight
    );
  }

  function handleScroll() {
    elementsToAnimate.forEach(function (element) {
      if (isElementPartiallyInViewport(element)) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});





