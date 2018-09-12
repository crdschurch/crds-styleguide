window.addEventListener('message', function(event) {
  if (event.origin === window.location.origin) {
    document.body.classList = event.data;
  }
}, false);
