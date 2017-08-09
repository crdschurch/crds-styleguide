import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronComponent } from './jumbotron.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ContentBlockModule
  ],
  providers: [],
  declarations: [
    JumbotronComponent,
    BreadcrumbsComponent
  ],
  exports: [
    JumbotronComponent
  ],
  bootstrap: [
    JumbotronComponent
  ]
})
export class JumbotronModule {}
