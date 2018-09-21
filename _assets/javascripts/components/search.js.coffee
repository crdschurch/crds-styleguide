if typeof window.DDK is 'undefined' then window.DDK = {}

class DDK.Search

  search_el: '#ddk-search'
  search_results: '.ddk-search-results'
  focused: undefined
  debug: false

  constructor: ->
    $.get '/search-index.json', (data) =>
      @json = data;
    @events()

  events: ->
    $(document).keyup (e) =>
      if e.key == "/" || e.key == "Escape"
        $("#ddk-search").focus()
    $(document).bind 'keydown', @search_el, @debounce(@traverse, 100)
    $(@search_el).bind 'keypress', @debounce(@query, 100)

  empty: ->
    $(@search_results).empty();

  get_results: ->
    input = $(@search_el).val()
    $.grep @json, (n, i) ->
      if n.name
        matches = n.name.match(new RegExp(input, "i"))
        return matches && matches.length > 0
      else
        return false

  query:  =>
    @empty()
    $.each @get_results(), (i,obj) =>
      li = @build_result(obj)
      $(@search_results).append(li)

  build_result: (obj) ->
    a = $("<a class='font-size-large'></a>").attr('href', obj.path).html("<span class='component-name'>#{obj.name}</span>")
    li = $('<li></li>').append(a)

  traverse: (e) =>
    if e.key == "ArrowDown"
      if @focused
        @focused.removeClass("focused")
        next = @focused.next()
        if next.length > 0
          @focused = next.addClass("focused")
        else
          @focused = $("#{@search_results} li").eq(0).addClass("focused")
      else
        @focused = $("#{@search_results} li").eq(0).addClass("focused")

    if e.key == "ArrowUp"
      if @focused
        @focused.removeClass("focused")
        next = @focused.prev()
        if next.length > 0
          @focused = next.addClass("focused")
        else
          @focused = $("#{@search_results} li").last().addClass("focused")
      else
        @focused = $("#{@search_results} li").last().addClass("focused");

    if e.key == "Enter" && $(@search_el).val().length > 0
      url = $('.focused a').attr('href')
      window.location.href = url

  debounce: (func, wait, immediate) ->
    timeout = undefined
    ->
      context = this
      args = arguments

      later = ->
        timeout = null
        if !immediate
          func.apply context, args
        return

      callNow = immediate and !timeout
      clearTimeout timeout
      timeout = setTimeout(later, wait)
      if callNow
        func.apply context, args
      return

  log: (str) ->
    if @debug
      console.log(str)


$ -> new DDK.Search()