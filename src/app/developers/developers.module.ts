import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { DeveloperRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';
import { BuiltOnBootstrapComponent } from './built-on-bootstrap/built-on-bootstrap.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';
import { ContributionTipsComponent } from './contribution-tips/contribution-tips.component';
import { CssSassComponent } from './css-sass/css-sass.component';

import { CustomNpmPackagesComponent } from './custom-npm-packages/custom-npm-packages.component';
import { OverviewDryComponent } from './custom-npm-packages/overview-dry/overview-dry.component';
import { ContentBlocksComponent } from './custom-npm-packages/content-blocks/content-blocks.component';
import { ReactiveSsoComponent } from './custom-npm-packages/reactive-sso/reactive-sso.component';
import { SharedHeaderComponent } from './custom-npm-packages/shared-header/shared-header.component';
import { CustomNpmPackagesJumbotronComponent } from './custom-npm-packages/custom-npm-packages-jumbotron/custom-npm-packages-jumbotron.component';

import { FileStructureComponent } from './file-structure/file-structure.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GridComponent } from './grid/grid.component';
import { ImgixComponent } from './imgix/imgix.component';
import { InstallationComponent } from './installation/installation.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { WebFontsComponent } from './web-fonts/web-fonts.component';

@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    ContentBlockModule
  ],
  declarations: [
    DevelopersComponent,
    DevelopersIntroComponent,
    BuiltOnBootstrapComponent,
    CodingStyleComponent,
    ContributionTipsComponent,
    CssSassComponent,
    CustomNpmPackagesComponent,
    OverviewDryComponent,
    ContentBlocksComponent,
    ReactiveSsoComponent,
    SharedHeaderComponent,
    CustomNpmPackagesJumbotronComponent,
    FileStructureComponent,
    GettingStartedComponent,
    GridComponent,
    ImgixComponent,
    InstallationComponent,
    NamingConventionsComponent,
    WebFontsComponent
  ]
})
export class DevelopersModule { }
