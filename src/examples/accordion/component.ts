import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <accordion>
      <accordion-group heading="Static Header, initially expanded">
        This content is straight in the template.
      </accordion-group>
      <accordion-group #group>
        <div accordion-heading>
          I can have markup, too!
          <i class="pull-right float-xs-right">
            <svg class="icon icon-1" viewBox="0 0 256 256">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svgs/icons.svg#chevron-down"></use>
            </svg>
          </i>
        </div>
        This is just some content to illustrate fancy headings.
      </accordion-group>
      <accordion-group heading="Content 1">
        <p>Content 1</p>
      </accordion-group>
      <accordion-group heading="Content 2">
        <p>Content 2</p>
      </accordion-group>
    </accordion>
  `
})
export class AppComponent {}