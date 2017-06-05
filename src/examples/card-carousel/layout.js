function carousel_styles() {
  const carousel = document.body.querySelector('.card-deck--carousel');
  const cards = carousel.querySelectorAll('.card');

  if (window.matchMedia('(max-width: 769px)').matches) {
    carousel.classList.remove('card-deck');

    new Flickity(carousel, {
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

    for (let card = 0; card < cards.length; card++) {
      cards[card].classList.add('carousel-cell');
    }
  } else {
    carousel.classList.add('card-deck');

    new Flickity(carousel).destroy();

    for (let card = 0; card < cards.length; card++) {
      cards[card].classList.remove('carousel-cell');
    }
  }
}

window.onload = function() {
  carousel_styles();
};

window.onresize = function() {
  carousel_styles();
};