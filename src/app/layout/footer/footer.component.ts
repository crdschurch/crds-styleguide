import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private version;
  private timestamp;
  constructor() {
    this.version = process.env.styles.version;
    this.timestamp = process.env.styles.date;
  }
}
