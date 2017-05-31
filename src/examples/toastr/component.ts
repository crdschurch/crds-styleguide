import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './component.html'
})
export class AppComponent {

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  showToast(toastType) {
    let options = { toastLife: 10000 },
        message = 'I am a toast notitification!';
    switch (toastType) {
      case 'success':
        this.toastr.success(message, 'Success!', options);
        break;
      case 'error':
        this.toastr.error(message, 'Error!', options);
        break;
      case 'warning':
        this.toastr.warning(message, 'Warning!', options);
        break;
      case 'info':
        this.toastr.info(message, 'Info!', options);
        break;
      case 'custom':
        this.toastr.custom(message, 'Custom!', options);
        break;
    }
    return true;
  }
}

