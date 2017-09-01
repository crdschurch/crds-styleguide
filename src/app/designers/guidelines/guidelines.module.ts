import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { GuidelinesRoutingModule } from './guidelines-routing.module';

import { GuidelinesComponent } from './guidelines.component';

import { IntroComponent } from './intro/intro.component';
import { ColorUsageComponent } from './color-usage/color-usage.component';
import { CopyVoiceComponent } from './copy-voice/copy-voice.component';
import { LogosComponent } from './logos/logos.component';
import { PhotographyComponent } from './photography/photography.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    GuidelinesRoutingModule,
    ContentBlockModule,
    JumbotronModule
  ],
  declarations: [
    GuidelinesComponent,
    IntroComponent,
    ColorUsageComponent,
    CopyVoiceComponent,
    LogosComponent,
    PhotographyComponent,
    TypographyComponent
  ]
})
export class GuidelinesModule {}
