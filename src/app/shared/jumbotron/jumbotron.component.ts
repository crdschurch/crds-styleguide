import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './jumbotron.component.html',
  selector: 'ddk-jumbotron'
})
export class JumbotronComponent {

  @Input() id: string;

}
