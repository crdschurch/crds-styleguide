$(document).ready(function() {
  var themeSwitch = document.getElementsByClassName('theme-toggle-switch');

  localStorage.getItem('currentState') == 'on' ? $('body').addClass('dark-theme') : $('body').removeClass('dark-theme');

  $(themeSwitch).click(function(){
    $('body').toggleClass('dark-theme');
    $('body').hasClass('dark-theme') ? localStorage.setItem('currentState', 'on') : localStorage.removeItem('currentState');
  });
});