import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './component';

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
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: ToastOptions,
      useClass: CustomOptions
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
