import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronModule } from '../shared/jumbotron/jumbotron.module';

import { DeveloperRoutingModule } from './developers-routing.module';

import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';

import { GettingStartedModule } from './getting-started/getting-started.module';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { ThirdPartyToolsModule } from './third-party-tools/third-party-tools.module';

@NgModule({
  imports: [
    CommonModule,
    JumbotronModule,
    DeveloperRoutingModule,
    ContentBlockModule,
    GettingStartedModule,
    LearnMoreModule,
    ThirdPartyToolsModule
  ],
  declarations: [
    DevelopersComponent,
    DevelopersIntroComponent
  ]
})
export class DevelopersModule {}
