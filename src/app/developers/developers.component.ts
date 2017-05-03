import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './developers.component.html'
})
export class DevelopersComponent {

  constructor(private router:Router) {
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
