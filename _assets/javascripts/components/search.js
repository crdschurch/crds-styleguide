(function() {
  if (typeof window.DDK === "undefined") {
    window.DDK = {};
  }

  DDK.Search = function() {
    class Search {
      constructor() {
        this.query = this.query.bind(this);
        this.traverse = this.traverse.bind(this);
        $.get("/search-index.json", data => {
          return (this.json = data);
        });
        this.events();
      }

      events() {
        $(document).keyup(e => {
          if (e.key === "/" || e.key === "Escape") {
            return $("#ddk-search").focus();
          }
        });
        $(document).bind(
          "keydown",
          this.search_el,
          this.debounce(this.traverse, 100)
        );
        return $(this.search_el).bind(
          "keypress",
          this.debounce(this.query, 100)
        );
      }

      empty() {
        return $(this.search_results).empty();
      }

      get_results() {
        var input;
        input = $(this.search_el).val();
        return $.grep(this.json, function(n, i) {
          var matches;
          if (n.name) {
            matches = n.name.match(new RegExp(input, "i"));
            return matches && matches.length > 0;
          } else {
            return false;
          }
        });
      }

      query() {
        this.empty();
        return $.each(this.get_results(), (i, obj) => {
          var li;
          li = this.build_result(obj);
          return $(this.search_results).append(li);
        });
      }

      build_result(obj) {
        var a, li;
        a = $("<a class='font-size-large'></a>")
          .attr("href", obj.path)
          .html(`<span class='component-name'>${obj.name}</span>`);
        return (li = $("<li></li>").append(a));
      }

      traverse(e) {
        var next, url;
        if (e.key === "ArrowDown") {
          if (this.focused) {
            this.focused.removeClass("focused");
            next = this.focused.next();
            if (next.length > 0) {
              this.focused = next.addClass("focused");
            } else {
              this.focused = $(`${this.search_results} li`)
                .eq(0)
                .addClass("focused");
            }
          } else {
            this.focused = $(`${this.search_results} li`)
              .eq(0)
              .addClass("focused");
          }
        }
        if (e.key === "ArrowUp") {
          if (this.focused) {
            this.focused.removeClass("focused");
            next = this.focused.prev();
            if (next.length > 0) {
              this.focused = next.addClass("focused");
            } else {
              this.focused = $(`${this.search_results} li`)
                .last()
                .addClass("focused");
            }
          } else {
            this.focused = $(`${this.search_results} li`)
              .last()
              .addClass("focused");
          }
        }
        if (e.key === "Enter" && $(this.search_el).val().length > 0) {
          url = $(".focused a").attr("href");
          return (window.location.href = url);
        }
      }

      debounce(func, wait, immediate) {
        var timeout;
        timeout = void 0;
        return function() {
          var args, callNow, context, later;
          context = this;
          args = arguments;
          later = function() {
            timeout = null;
            if (!immediate) {
              func.apply(context, args);
            }
          };
          callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) {
            func.apply(context, args);
          }
        };
      }

      log(str) {
        if (this.debug) {
          return console.log(str);
        }
      }
    }

    Search.prototype.search_el = "#ddk-search";

    Search.prototype.search_results = ".ddk-search-results";

    Search.prototype.focused = void 0;

    Search.prototype.debug = false;

    return Search;
  }.call(this);

  $(function() {
    return new DDK.Search();
  });
}.call(this));
