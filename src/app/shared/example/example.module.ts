import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleComponent } from './example.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [ExampleComponent],
  exports: [ExampleComponent],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
