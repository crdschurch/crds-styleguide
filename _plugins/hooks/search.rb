require 'open-uri'
require 'json'
require 'pry'

indexable = []

Jekyll::Hooks.register(:pages, :post_write) do |page|
  indexable << { name: page.data['title'], path: page.url }
end

Jekyll::Hooks.register(:site, :post_write) do |page|
  File.open("_site/search-index.json","w") do |f|
    f.write(indexable.to_json)
  end
end
