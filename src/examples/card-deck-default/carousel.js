window['CRDS'] = window['CRDS'] || {};

CRDS.CardCarousel = function() {
  return this.addEvents();
}

CRDS.CardCarousel.prototype.constructor = CRDS.CardCarousel;

CRDS.CardCarousel.prototype.getCarousel = function() {
  return document.body.querySelector('.card-deck');
};

CRDS.CardCarousel.prototype.getCards = function() {
  return this.getCarousel().querySelectorAll('.card');
};

CRDS.CardCarousel.prototype.updateCardClass = function(action) {
  for (var card = 0; card < this.getCards().length; card++) {
    this.getCards()[card].classList[action]('carousel-cell');
  };
}

CRDS.CardCarousel.prototype.createCarousel = function() {
  new Flickity(this.getCarousel(), {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
};

CRDS.CardCarousel.prototype.destroyCarousel = function() {
  this.getCarousel().classList.add('card-deck--expanded-layout');
  this.updateCardClass('remove');
  new Flickity(this.getCarousel()).destroy();
};

CRDS.CardCarousel.prototype.addStyles = function() {
  var carousel_type = this.getCarousel().dataset.carousel;

  if (carousel_type === 'mobile-scroll') {
    if (window.matchMedia('(max-width: 769px)').matches) {
      this.getCarousel().classList.remove('card-deck--expanded-layout');
      this.updateCardClass('add');
      this.createCarousel();
    } else {
      this.destroyCarousel();
    }
  } else {
    this.createCarousel();
  }
};

CRDS.CardCarousel.prototype.addEvents = function() {
  var _this = this;
  ['load', 'resize'].forEach(function(eventName) {
    window.addEventListener(eventName, function() {
      _this.addStyles();
    }, false);
  });
};

new CRDS.CardCarousel();