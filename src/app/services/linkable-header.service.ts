import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LinkableHeaderService {
  
  constructor(private router: Router) {}
  
  init() {
    console.log('init');

    let date = new Date();
    let current_path = this.router.url.replace(/#.*/, "");
    let els = document.querySelectorAll(".component h1, .component h2, .component h3, .component h4, .component h5, .component h6");
    [].forEach.call(els, function(el) {
      if(!el.hasAttribute('data-linked')) {
        let id = this.parameterize(el.innerHTML);
        let anchor = document.createElement('a')
            anchor.setAttribute('id', id);
            anchor.setAttribute('name', id);
            anchor.setAttribute('href', current_path + '#' + id);
            anchor.setAttribute('fragment', id);
            anchor.setAttribute('target', '_self');
            anchor.addEventListener('click', function(e) {
              window.location.hash = this.getAttribute('fragment');
              e.stopPropagation();
              return false;
            });
            anchor.innerHTML = '<svg class="icon" viewBox="0 0 256 256"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svgs/icons.svg#link"></use></svg>';
        el.setAttribute('data-linked', date.toString());
        el.parentNode.insertBefore(anchor, el);
      }
    }.bind(this));
  }

  onClick(e) {
    console.log(e);
    // return false;
  }

  private parameterize(str) {
    return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
  }

}