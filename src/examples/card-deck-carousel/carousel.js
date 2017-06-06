var CRDS = window['CRDS'] || {};

CRDS.CardCarousel = (function() {

  return {
    addStyles: function() {
      var carousel = document.body.querySelector('.card-deck');
      var cards = carousel.querySelectorAll('.card');
      var carousel_type = carousel.dataset.carousel;

      if (carousel_type == 'mobile-scroll') {
        if (window.matchMedia('(max-width: 769px)').matches) {
          carousel.classList.remove('card-deck--expanded-layout');

          new Flickity(carousel, {
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false
          });

          for (var card = 0; card < cards.length; card++) {
            cards[card].classList.add('carousel-cell');
          }
        } else {
          carousel.classList.add('card-deck--expanded-layout');

          new Flickity(carousel).destroy();

          for (var card = 0; card < cards.length; card++) {
            cards[card].classList.remove('carousel-cell');
          }
        }
      } else {
        new Flickity(carousel, {
          cellAlign: 'left',
          contain: true,
          prevNextButtons: false,
          pageDots: false
        });
      }
    }
  }
})();

("load resize".split(" ")).forEach(function(e){
  window.addEventListener(e, CRDS.CardCarousel.addStyles, false);
});
