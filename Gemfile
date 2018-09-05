source "https://rubygems.org"

gem "jekyll", "~> 3.7.3"
gem 'uglifier'

# To fix security vulnerability
gem 'sprockets', '~> 3.7.2'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-assets'
  gem "jekyll-feed", "~> 0.6"
  gem 'crds-styles', '~> 3.0.4', git: 'https://github.com/crdschurch/crds-styles.git'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

