/* tslint:disable:max-line-length */

import { Component, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';

let Prism = require('prismjs');

@Component({
  templateUrl: './developers.component.html'
})
export class DevelopersComponent implements AfterViewChecked {

  constructor(private router: Router) {
  }

  ngAfterViewChecked() {
    let preformatted = document.querySelectorAll('.language-markup, .language-javascript, .language-css, .language-bash');
    for (let j = 0; j < preformatted.length; j++) {
      if (!preformatted[j].getAttribute('data-processed')) {
        this.addSyntaxHighlighting(preformatted[j]);
      }
    }
  }

  private addSyntaxHighlighting(el) {
    el.setAttribute('data-processed', 'true');
    Prism.highlightElement(el);
  }

  displaySidebar() {
    return this.currentUrl() !== '/developers/intro';
  }

  displaySidebarNav(id: string) {
    let url = this.currentUrl();
    return (id === 'getting-started' && url.search(/getting-started|installation|coding-style|file-structure|naming-conventions|contribution-tips/) > -1)
        || (id === 'learn-more' && url.search(/built-on-bootstrap|css-sass|grid|imgix|web-fonts|custom-npm-packages/) > -1)
        ;
  }

  currentUrl() {
    return this.router.url;
  }
}
