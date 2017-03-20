import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from '../app.module';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { AssetsRoutingModule } from './assets-routing.module';

import { AssetsComponent } from './assets.component';

import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule,
    ContentBlockModule
  ],
  exports: [
    AssetsComponent
  ],
  declarations: [
    AssetsComponent,

    LogoComponent
  ]
})
export class AssetsModule { }
