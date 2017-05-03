import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ddk-designers-components',
  templateUrl: './designers.component.html'
})
export class DesignersComponent {

  constructor(private router:Router) {
  }

  displaySidebar() {
    return this.currentUrl() !== '/developers/intro';
  }

  displaySidebarNav(id: string) {
    let url = this.currentUrl();
    return (id === 'guidelines' && url.search(/intro|color-usage|copy-voice|logos|photography|typography/) > -1)
        || (id === 'getting-started' && url.search(/mobile-first|prototyping|responsive-web-design/) > -1)
        ;
  }

  currentUrl() {
    return this.router.url;
  }
}
