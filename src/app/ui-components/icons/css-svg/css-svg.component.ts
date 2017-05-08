import { Component, OnInit } from '@angular/core';
import { IconService } from '../../../directives/icons/icons.service';

@Component({
  templateUrl: './css-svg.component.html',
  providers: [IconService]
})
export class IconCssComponent implements OnInit {

  icons = [];

  constructor(private _iconService: IconService) {}

  ngOnInit() {
    this.icons = this._iconService.icons;
  }

}
