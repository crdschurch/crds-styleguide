import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'full-modal',
  templateUrl: './full-modal.component.html'
})
export class FullModalComponent {
  @Input() buttonText: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
}
