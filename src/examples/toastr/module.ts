import { NgModule } from '@angular/core';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';

export class CustomOptions extends ToastOptions {
  animate = 'fade';
  dismiss = 'auto';
  showCloseButton = true;
  newestOnTop = true;
  enableHTML = true;
  // messageClass = '';
  // titleClass = '';
}

@NgModule({
  imports: [BrowserModule, ToastModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    { provide: ToastOptions, useClass: CustomOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
