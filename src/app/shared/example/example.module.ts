import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleComponent } from './example.component';

import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

export class CustomOptions extends ToastOptions {
  animate = 'fade';
  dismiss = 'auto';
  showCloseButton = true;
  newestOnTop = true;
  enableHTML = true;
}

@NgModule({
  imports: [
    BrowserModule,
    ToastModule.forRoot()
  ],
  providers: [
    {
      provide: ToastOptions,
      useClass: CustomOptions
    }
  ],
  declarations: [ExampleComponent],
  exports: [ExampleComponent],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
