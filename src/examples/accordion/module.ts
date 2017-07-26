import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ng2-bootstrap';
import { AppComponent } from './component';

@NgModule({
  imports: [BrowserModule, AccordionModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}