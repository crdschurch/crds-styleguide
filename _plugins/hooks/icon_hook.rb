require 'open-uri'

Jekyll::Hooks.register(:site, :after_init) do |site|
  dir = File.join(site.config.dig('source'), '_assets', 'stylesheets', 'vendors', 'crds-styles', 'assets', 'svgs')
  %w(icons.svg icons.css.svg).each do |f|
    FileUtils.cp File.join(dir, f), File.join(site.source, 'assets', 'svgs')
  end
end