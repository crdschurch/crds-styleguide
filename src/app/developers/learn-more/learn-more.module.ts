import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { LearnMoreRoutingModule } from './learn-more-routing.module';

import { LearnMoreComponent } from './learn-more.component';

import { BrowserSupportComponent } from './browser-support/browser-support.component';
import { BuiltOnBootstrapComponent } from './built-on-bootstrap/built-on-bootstrap.component';
import { CssSassComponent } from './css-sass/css-sass.component';
import { GridComponent } from './grid/grid.component';
import { WebFontsComponent } from './web-fonts/web-fonts.component';
import { CustomNpmPackagesComponent } from './custom-npm-packages/custom-npm-packages.component';

@NgModule({
  imports: [
    CommonModule,
    LearnMoreRoutingModule,
    ContentBlockModule,
    JumbotronModule
  ],
  declarations: [
    LearnMoreComponent,
    BrowserSupportComponent,
    BuiltOnBootstrapComponent,
    CssSassComponent,
    GridComponent,
    WebFontsComponent,
    CustomNpmPackagesComponent
  ]
})
export class LearnMoreModule {}
