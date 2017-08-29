import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from '../app.module';
import { ContentBlockModule } from 'crds-ng2-content-block';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { LogosComponent } from './logos/logos.component';

import { ExampleModule } from '../shared/example/example.module';
import { JumbotronModule } from '../shared/jumbotron/jumbotron.module';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule,
    ContentBlockModule,
    ExampleModule,
    JumbotronModule
  ],
  exports: [
    AssetsComponent
  ],
  declarations: [
    AssetsComponent,
    LogosComponent
  ]
})
export class AssetsModule { }
