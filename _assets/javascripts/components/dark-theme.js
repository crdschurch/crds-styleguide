$(document).ready(function() {
  const themeSwitch = $(".theme-toggle-switch");

  const iframeBody = iframe =>
    $(iframe)
      .contents()
      .find("body");

  $("iframe").each((idx, iframe) => {
    $(iframe).on("load", function(event) {
      localStorage.getItem("currentState") == "on"
        ? iframeBody(iframe).addClass("dark-theme")
        : iframeBody(iframe).removeClass("dark-theme");
    });
  });

  localStorage.getItem("currentState") == "on"
    ? $("body").addClass("dark-theme")
    : $("body").removeClass("dark-theme");

  $(themeSwitch).click(function() {
    $("body").toggleClass("dark-theme");

    if ($("body").hasClass("dark-theme")) {
      localStorage.setItem("currentState", "on");
      iframeBody(".crds-example iframe").addClass("dark-theme");
    } else {
      localStorage.removeItem("currentState");
      iframeBody(".crds-example iframe").removeClass("dark-theme");
    }
  });
});
