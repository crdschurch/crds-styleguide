// RECOMMENDED (doesn't work with system.js)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './component';

@NgModule({
  imports: [BrowserModule, TooltipModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}