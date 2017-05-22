import { Component, OnInit } from '@angular/core';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
    <p>Hello World</p>
  `
})
export class AppComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private toastrConfig: ToastrConfig) {
    this.toastrConfig.timeOut = 10000;
  }

  public ngOnInit() {
    setTimeout(() => {
      this.toastr.success('Hello World', 'Something Else');
    }, 2500);
  }

}
