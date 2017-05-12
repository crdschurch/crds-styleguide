import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'ng2-bootstrap';
import { AppComponent } from './app';

@NgModule({
  imports: [BrowserModule, DatepickerModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}