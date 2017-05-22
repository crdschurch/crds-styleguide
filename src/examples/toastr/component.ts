import { Component, OnInit } from '@angular/core';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './component.html'
})
export class AppComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private toastrConfig: ToastrConfig) {
    toastrConfig.tapToDismiss = false;
    toastrConfig.timeOut = 0;
  }

  public ngOnInit() {}

  clickForToast() {
    console.log(this.toastrConfig);
    console.log(this.toastr);
    return this.toastr.success('Hello World', 'Something Else');
  }
}
