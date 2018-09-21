$(document).ready(function() {

  $('body').on('click', '.file-code-trigger', function(event) {
    $(this).parents('.crds-example').find('.file-code, .file-code-trigger').removeClass('active');
    var filename = $(this).data('file');
    $('.file-code[data-file="' + filename + '"]').addClass('active');
    $(this).addClass('active');
  });

  $('.file-code-trigger:first-child, .file-code:first-child').each(function(idx, trigger) {
    $(trigger).addClass('active');
  });

});
