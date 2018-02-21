import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'default-modal',
  templateUrl: './default-modal.component.html'
})
export class DefaultModalComponent {

  @Input() buttonText: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
}
