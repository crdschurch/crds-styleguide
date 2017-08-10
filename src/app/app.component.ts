import { Component, ViewEncapsulation, ElementRef, Renderer, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var imgix: any;
declare var svg4everybody: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer,
              private router: Router) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
      if (event.target.closest('.crds-example')) {
        if (event.target.nodeName === 'A' || event.target.classList.contains('btn')) {
          return false;
        }
      }
    });
  }

  public ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      /**
       * This is an example of how we could track history if we want to don't
       * want to scroll to the top of the page when going back to the previous
       * page. It requires having a `routeHistory` array attribute on the class.
       *
       * this.routeHistory.push(evt.urlAfterRedirects);
       * if (this.routeHistory.length > 3) {
       *   this.routeHistory.splice(0, this.routeHistory.length - 3);
       * }
       * if (!this.routeHistory[2] || this.routeHistory[2] !== this.routeHistory[0]) {}
       */

      // Scroll to the top of the page when on navigation change.
      window.scrollTo(0, 0);

      // Initialize any data-src references in current route that haven't been already processed by Imgix
      imgix.init();

      svg4everybody();
    });
  }


}
