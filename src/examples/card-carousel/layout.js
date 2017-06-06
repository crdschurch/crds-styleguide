var CRDS = window['CRDS'] || {};

CRDS.CardCarousel = (function() {

  return {
    addStyles: function() {
      var carousel = document.body.querySelector('.card-deck--carousel');
      var cards = carousel.querySelectorAll('.card');

      if (window.matchMedia('(max-width: 769px)').matches) {
        carousel.classList.remove('card-deck');

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
        carousel.classList.add('card-deck');

        new Flickity(carousel).destroy();

        for (var card = 0; card < cards.length; card++) {
          cards[card].classList.remove('carousel-cell');
        }
      }
    }
  }

})();

("load resize".split(" ")).forEach(function(e){
  window.addEventListener(e, CRDS.CardCarousel.addStyles, false);
});

