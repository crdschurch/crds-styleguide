import { Component, ViewEncapsulation, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
      if (event.target.closest('.crds-example')) {
        if (event.target.nodeName === 'A' || event.target.classList.contains('btn')) {
          return false;
        }
      }
    });
  }
}
