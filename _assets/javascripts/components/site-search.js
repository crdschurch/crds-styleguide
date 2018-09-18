// Navigating search:
$(document).keypress(function(e) {
  // If user types '/', focus search
  if (e.key === "/" || e.key === "Escape") {
    $("#ddk-search").focus();
  }
});

var result = $(".ddk-search-results li");
var focused;

$("#ddk-search").keydown(function(e) {
  // If user types '↑', then move focus up search list
  if (e.key === "ArrowDown") {
    if (focused) {
      focused.removeClass("focused");
      next = focused.next();
      if (next.length > 0) {
        focused = next.addClass("focused");
      } else {
        focused = result.eq(0).addClass("focused");
      }
    } else {
      focused = result.eq(0).addClass("focused");
    }
  }

  // If user types '↓', then move focus down search list
  if (e.key === "ArrowUp") {
    if (focused) {
      focused.removeClass("focused");
      next = focused.prev();
      if (next.length > 0) {
        focused = next.addClass("focused");
      } else {
        focused = result.last().addClass("focused");
      }
    } else {
      focused = result.last().addClass("focused");
    }
  }

  // If user types 'enter', then url directs to selected list option
  if (e.key === "Enter") {
    var url = $('.focused a').attr('href');
    window.location.href = url;
  }
});

// Search:
$("#ddk-search").keypress(function(e) {
  var results = $(".ddk-search-results");
  results.removeClass("hide");
  // Key matching against json list of components (search-index.json)
});
