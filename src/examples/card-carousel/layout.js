if (window.matchMedia('(min-width: 720px)').matches) {
  const carousel = document.body.querySelector('.card-deck--carousel');

  carousel.removeAttribute('data-flickity');
  carousel.classList.remove('carousel');
  carousel.classList.add('card-deck');

  const cards = carousel.querySelectorAll('.card');

  for (var card = 0; card < cards.length; card++) {
    cards[card].classList.remove('carousel-cell');
  }
}