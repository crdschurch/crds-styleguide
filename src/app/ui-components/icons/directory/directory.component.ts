import { Component } from '@angular/core';
import { IconService } from '../../../directives/icons/icons.service'

@Component({
  templateUrl: './directory.component.html',
  providers: [IconService]
})
export class IconDirectoryComponent {

  icons = [];

  constructor(private _iconService: IconService) {}

  ngOnInit() {
    this.icons = this._iconService.icons;
  }

}
