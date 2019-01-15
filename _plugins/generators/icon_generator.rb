module Jekyll
  module Crds
    class IconGenerator < Generator

      def generate(site)
        path = File.join(site.config.dig('source'), '_assets', 'stylesheets', 'vendors', 'crds-styles', 'src', 'assets', 'svgs', '*svg')
        icons = Dir.glob(path).collect{|f| File.basename(f, '.svg') }
        site.config['icon_directory'] = {
          "source" => File.dirname(path),
          "icons" => icons
        }
      end

    end
  end
end