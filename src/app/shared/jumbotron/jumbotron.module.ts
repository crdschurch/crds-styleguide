import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronComponent } from './jumbotron.component';

@NgModule({
  imports: [
    BrowserModule,
    ContentBlockModule
  ],
  providers: [],
  declarations: [
    JumbotronComponent
  ],
  exports: [
    JumbotronComponent
  ],
  bootstrap: [
    JumbotronComponent
  ]
})
export class JumbotronModule {}
