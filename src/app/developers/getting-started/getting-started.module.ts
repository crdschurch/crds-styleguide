import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { GettingStartedRoutingModule } from './getting-started-routing.module';

import { GettingStartedComponent } from './getting-started.component';

import { IntroComponent } from './intro/intro.component';
import { InstallationComponent } from './installation/installation.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';
import { FileStructureComponent } from './file-structure/file-structure.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { ContributionTipsComponent } from './contribution-tips/contribution-tips.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    ContentBlockModule,
    JumbotronModule
  ],
  declarations: [
    GettingStartedComponent,
    IntroComponent,
    InstallationComponent,
    CodingStyleComponent,
    FileStructureComponent,
    NamingConventionsComponent,
    ContributionTipsComponent
  ]
})
export class GettingStartedModule {}
