require 'rouge'

module Jekyll
  class CodeBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      @language = markup.nil? ? 'html' : markup.strip
      @highlighter = Jekyll::Tags::HighlightBlock.send(:new, tag_name, markup, tokens)
      super
    end

    def render(context)
      source = super
      return nil if source.nil?

      formatter = Rouge::Formatters::HTML.new
      formatter = Rouge::Formatters::HTMLPygments.new(formatter, 'highlight')

      content = <<-EOF
        <div class="crds-example crds-inline-markup">
          #{source.strip}
        </div>
        <div class="crds-example-code">
          #{formatter.format(lexer.lex(source.strip))}
          <button class="btn btn-gray-light btn-sm clippable" type="button" id="clippable-93cb243a-922e-4bc6-8b5f-ae180fb39c2b">
            <svg class="icon icon-1" viewBox="0 0 256 256">
              <use xlink:href="/assets/svgs/icons.svg#copy" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </button>
        </div>
      EOF
    end

    private

      def lexer
        module_names = {
          html: 'HTML',
          css: 'CSS',
          js: 'Javasript'
        }
        raise 'Lexer not supported' unless module_names.include?(@language.to_sym)
        Object.const_get("Rouge::Lexers::#{module_names[@language.to_sym]}").new
      end

  end
end

Liquid::Template.register_tag('code', Jekyll::CodeBlock)
