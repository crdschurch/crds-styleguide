import { Component } from '@angular/core';


@Component({
  templateUrl: './groups.component.html'
})

export class ButtonGroupsComponent {
  public buttons: Array<Object> = [
    { label: 'First Option', class: 'btn-primary' },
    { label: 'Second Option', class: 'btn-secondary' },
    { label: 'Third Option', class: 'btn-outline btn-gray' },
    { label: 'Fourth Option', class: 'btn-link btn-default' }
  ];
  public verticalButtons: Array<Object> = this.buttons;
  public flexButtons: Array<Object> = this.buttons;

  public selectedButton: Object;
  public radioModel = 'option_a';

  onSelect(button): void {
    this.selectedButton = button;
  }
}