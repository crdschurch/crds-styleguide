import { Component } from '@angular/core';
import { LinkableHeaderService } from '../../../../services/linkable-header.service';

@Component({
  templateUrl: './styles.component.html'
})
export class ButtonStylesComponent {
  constructor(private headers: LinkableHeaderService) {
  }
}
