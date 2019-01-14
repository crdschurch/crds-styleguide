$(document).ready(function() {
  var themeSwitch = $(".theme-toggle-switch");

  if (localStorage.getItem("currentState") == "on") {
    $("body").addClass("dark-theme");
    $("iframe")
      .contents()
      .find("body")
      .addClass("dark-theme");
  } else {
    $("body").removeClass("dark-theme");
    $("iframe")
      .contents()
      .find("body")
      .removeClass("dark-theme");
  }

  $(themeSwitch).click(function() {
    $("body").toggleClass("dark-theme");

    if ($("body").hasClass("dark-theme")) {
      localStorage.setItem("currentState", "on");
      $("iframe")
        .contents()
        .find("body")
        .addClass("dark-theme");
    } else {
      localStorage.removeItem("currentState");
      $("iframe")
        .contents()
        .find("body")
        .removeClass("dark-theme");
    }
  });
});
