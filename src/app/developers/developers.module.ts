import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedModule } from './getting-started/getting-started.module';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { ThirdPartyToolsModule } from './third-party-tools/third-party-tools.module';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedModule,
    LearnMoreModule,
    ThirdPartyToolsModule
  ]
})
export class DevelopersModule {}
