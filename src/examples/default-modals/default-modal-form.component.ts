import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'default-modal-form',
  templateUrl: './default-modal-form.component.html'
})
export class DefaultModalFormComponent {

  @Input() buttonText: string;

  constructor(public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
}
