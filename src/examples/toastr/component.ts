import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './component.html'
})
export class AppComponent implements OnInit {

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  public ngOnInit() {}

  clickForToast() {
    return this.toastr.success('Hello World', null, { toastLife: 100000 });
  }
}
