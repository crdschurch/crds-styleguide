import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'full-modal-form',
  templateUrl: './full-modal-form.component.html'
})
export class FullModalFormComponent {
  @Input() buttonText: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
}
