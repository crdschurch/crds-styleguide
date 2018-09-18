module Jekyll
  module SearchFilter
    # def asset_url(input)
    #   "http://www.example.com/#{input}?#{Time.now.to_i}"
    # end
  end
end

Liquid::Template.register_filter(Jekyll::SearchFilter)