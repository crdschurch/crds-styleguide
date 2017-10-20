import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LinkableHeaderService {

  constructor(private router: Router) {}

  init() {
    let date = new Date();
    let current_path = this.router.url.replace(/#.*/, '');
    // tslint:disable-next-line:max-line-length
    let els = document.querySelectorAll('.component h2, .component h3, h3.component-header, .component h4, .component h5, .component h6');
    [].forEach.call(els, function(el) {
      if (!el.hasAttribute('data-linked')) {
        el.setAttribute('data-linked', date.toString());
        let parent = el.parentNode;
        let id = this.parameterize(el.innerHTML);
        let anchor = document.createElement('a');
            anchor.setAttribute('id', id);
            anchor.setAttribute('name', id);
            anchor.setAttribute('href', current_path + '#' + id);
            anchor.setAttribute('fragment', id);
            anchor.setAttribute('target', '_self');
            anchor.addEventListener('click', this.onClick);
            // tslint:disable-next-line:max-line-length
            anchor.innerHTML = '<svg class="icon icon-1" viewBox="0 0 256 256"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svgs/icons.svg#link"></use></svg>';
        let clone = el.cloneNode(true);
        let div = document.createElement('div');
            div.classList.add('linkable');
            div.appendChild(anchor);
            div.appendChild(clone);
        el.parentNode.insertBefore(div, el);
        el.parentNode.removeChild(el);
      }
    }.bind(this));
  }

  onClick(e) {
    let fragment = e.target.getAttribute('fragment');
    window.location.hash = fragment;
    setTimeout(() => {
      document.getElementById(fragment).scrollIntoView();
    });
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  private parameterize(str) {
    return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, '').replace(/\s/g, '-');
  }

}
