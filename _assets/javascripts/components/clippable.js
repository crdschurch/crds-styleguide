$(document).ready(function() {
  var clippable = new ClipboardJS('[data-clippable]', {
    text: function(trigger) {
      var selector = $(trigger).data('clippable');
      return $(selector).html().trim();
    }
  });
  clippable.on('success', function(e) {
    $('body').prepend(
      '<div id="toast-container" class="toast-top-left">' +
        '<div class="alert alert-info alert-dismissible fade in" role="alert">' +
          '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
          '</button>' +
          'Code copied to clipboard!' +
        '</div>' +
      '</div>'
    );
    setTimeout(function() {
      $('#toast-container').fadeOut();
    }, 3000);
  });
});
