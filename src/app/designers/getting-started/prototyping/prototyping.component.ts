import { Component } from '@angular/core';

declare var imgix;

@Component({
  templateUrl: './prototyping.component.html'
})
export class PrototypingComponent {

  public loadImages() {
    imgix.init();
  }

}
