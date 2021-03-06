require 'rouge'

module Jekyll
  class InteractiveExampleTag < Liquid::Tag

    def initialize(tag_name, options, tokens)
      def_opts = { height: 330 }
      new_opts = options.strip.split(' ').map { |a| [a.split('=').first, a.split('=').last] }.to_h
      @options = def_opts.merge(new_opts.symbolize_keys)
      raise "Missing required option: #{name}" if @options[:name].nil?
      super
    end

    def render(context)
      example_dir = "examples/#{@options[:name]}"
      manifest_file = "#{example_dir}/manifest.json"
      raise "Manifest file not found: #{manifest_file}" unless File.exists?(manifest_file)
      manifest = JSON.parse(File.read(manifest_file)).deep_symbolize_keys
      entry_file = "/#{example_dir}/#{manifest[:entry] || 'index.html'}"
      files = {}
      manifest[:files].each do |file|
        files[file] = File.read("#{example_dir}/#{file}")
      end

      # clippable_id = "clippable-#{SecureRandom.uuid}"

      <<-EOF
        <div class="crds-example crds-embedded-markup">
          <iframe allowtransparency="true" src="#{entry_file}" width="100%" height="#{@options[:height]}" frameborder="0"></iframe>
          <div class="example-row">
            <div class="tree">
              <div class="list-group" role="tablist">
                #{file_list_html(files)}
              </div>
            </div>
            <div class="markup">
              #{file_code_html(files)}
            </div>
          </div>
        </div>
      EOF
    end

    private

      def file_list_html(files)
        content = files.map do |f, _|
          <<-EOF
            <a class="list-group-item file-code-trigger" href="javascript:void(0)" data-file="#{f}">
              #{f}
            </a>
          EOF
        end
        content.join('')
      end

      def file_code_html(files)
        content = files.map do |f, code|
          code.slice!("---\n---\n")
          file_ext = File.extname(f).delete('.')
          clippable_id = "clippable-#{SecureRandom.uuid}"
          <<-EOF
            <div class="file-code" data-file="#{f}">
              #{formatter.format(lexer(file_ext).lex(code.strip))}
              <button class="btn btn-gray-light btn-sm clippable" type="button" data-clippable="##{clippable_id}">
                <svg class="icon icon-1" viewBox="0 0 256 256">
                  <use xlink:href="/assets/svgs/icons.svg#copy" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </button>
              <div class="hidden" id="#{clippable_id}">
                #{code}
              </div>
            </div>
          EOF
        end
        content.join('')
      end

      def formatter
        formatter = Rouge::Formatters::HTML.new
        Rouge::Formatters::HTMLPygments.new(formatter, 'highlight')
      end

      def lexer(lang = 'html')
        module_names = {
          html: 'HTML',
          css: 'CSS',
          js: 'Javascript',
          ts: 'Typescript',
        }
        raise 'Lexer not supported' unless module_names.include?(lang.to_sym)
        Object.const_get("Rouge::Lexers::#{module_names[lang.to_sym]}").new
      end

  end
end

Liquid::Template.register_tag('interactive_example', Jekyll::InteractiveExampleTag)
