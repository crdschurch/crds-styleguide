import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'default-modal-promo',
  templateUrl: './default-modal-promo.component.html'
})
export class DefaultModalPromoComponent {

  @Input() buttonText: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
}
