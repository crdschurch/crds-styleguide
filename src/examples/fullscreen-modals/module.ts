import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

import { FullModalComponent } from './full-modal.component';
import { FullModalFormComponent } from './full-modal-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FullModalComponent,
    FullModalFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
