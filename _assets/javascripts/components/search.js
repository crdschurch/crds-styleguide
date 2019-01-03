if (typeof window.DDK === "undefined") {
  window.DDK = {};
}

DDK.Search = class Search {
  constructor() {
    this.search_el = "#ddk-search";
    this.search_results = ".ddk-search-results";
    this.focused = undefined;
    this.debug = false;

    this.query = this.query.bind(this);
    this.traverse = this.traverse.bind(this);
    this.cancel = this.cancel.bind(this);
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
    $(this.search_el).bind("keypress", this.debounce(this.query, 100));
    return $(document).bind("mouseup", this.debounce(this.cancel, 100));
  }

  empty() {
    return $(this.search_results).empty();
  }

  get_results() {
    const input = $(this.search_el).val();
    return $.grep(this.json, function(n, i) {
      if (n.name) {
        const matches = n.name.match(new RegExp(input, "i"));
        return matches && matches.length > 0;
      } else {
        return false;
      }
    });
  }

  query(e) {
    this.empty();
    return $.each(this.get_results(), (i, obj) => {
      const li = this.build_result(obj);
      return $(this.search_results).append(li);
    });
  }

  build_result(obj) {
    let li;
    const a = $("<a class='font-size-large'></a>")
      .attr("href", obj.path)
      .html(`<span class='component-name'>${obj.name}</span>`);
    return (li = $("<li></li>").append(a));
  }

  traverse(e) {
    let next;
    if (e.key === "Backspace") {
      if ($(this.search_el).val().length > 0) {
        this.query();
      } else {
        this.reset();
      }
    }

    if (e.key === "Escape" && $(this.search_el).val().length > 0) {
      this.reset();
    }

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
      const url = $(".focused a").attr("href");
      if (url !== undefined) {
        return (window.location.href = url);
      }
    }
  }

  debounce(func, wait, immediate) {
    let timeout = undefined;
    return function() {
      const context = this;
      const args = arguments;

      const later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  cancel(e) {
    const container = $(".ddk-search-form");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      return this.reset();
    }
  }

  reset() {
    return this.empty() && $("#ddk-search").val("") && $("#ddk-search").blur();
  }

  log(str) {
    if (this.debug) {
      return console.log(str);
    }
  }
};

$(() => new DDK.Search());