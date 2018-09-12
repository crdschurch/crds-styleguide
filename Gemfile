source "https://rubygems.org"

# ---------------------------------------- | Base

gem "jekyll", "~> 3.7.3"

# ---------------------------------------- | Assets

gem 'uglifier'

# ---------------------------------------- | Plugins

group :jekyll_plugins do
  gem 'jekyll-assets'
  gem 'crds-styles', git: 'https://github.com/crdschurch/crds-styles.git', tag: 'v3.0.4'
end

# ---------------------------------------- | Utilities

group :development do
  gem 'pry'
  gem 'pry-nav'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
