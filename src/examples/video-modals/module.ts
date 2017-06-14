import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { VideoModalComponent } from './video-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    VideoModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
