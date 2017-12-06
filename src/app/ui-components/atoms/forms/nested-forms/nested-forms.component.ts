import { Component } from '@angular/core';

@Component({
  templateUrl: './nested-forms.component.html'
})
export class FormNestedFormsComponent {
  selected: boolean = false;

  public selectedInput() {
    let inputs = document.body.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked = true) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    }
  }
}
