import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'my-app',
  template: `
    <p>Hello World</p>
  `
})
export class AppComponent implements OnInit {

  constructor(private toast: ToastsManager) {
    console.log('Hello');

  }

  public ngOnInit(): void {
    // console.log(this.toast);
  }

}
