import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

import { DefaultModalComponent } from './default-modal.component';
import { DefaultModalFormComponent } from './default-modal-form.component';
import { DefaultModalPromoComponent } from './default-modal-promo.component';
import { VideoModalComponent } from './video-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DefaultModalComponent,
    DefaultModalFormComponent,
    DefaultModalPromoComponent,
    VideoModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
