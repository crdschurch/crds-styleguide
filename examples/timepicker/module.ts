import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ng2-bootstrap';
import { AppComponent } from './component';

@NgModule({
  imports: [BrowserModule, TimepickerModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}