import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { AppModule } from '../app.module';
import { DesignersComponent } from './designers.component';
import { DesignersRoutingModule } from './designers-routing.module';

/* guidelines */
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { IntroComponent } from './guidelines/intro/intro.component';
import { ColorUsageComponent } from './guidelines/color-usage/color-usage.component';
import { CopyVoiceComponent } from './guidelines/copy-voice/copy-voice.component';
import { LogosComponent } from './guidelines/logos/logos.component';
import { PhotographyComponent } from './guidelines/photography/photography.component';
import { TypographyComponent } from './guidelines/typography/typography.component';

/* getting started */
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { MobileFirstComponent } from './getting-started/mobile-first/mobile-first.component';
import { PrototypingComponent } from './getting-started/prototyping/prototyping.component';
import { ResponsiveWebDesignComponent } from './getting-started/responsive-web-design/responsive-web-design.component';

@NgModule({
  imports: [
    CommonModule,
    DesignersRoutingModule,
    ContentBlockModule
  ],
  exports: [
    DesignersComponent
  ],
  declarations: [
    DesignersComponent,

    /* guidelines */
    GuidelinesComponent,
    IntroComponent,
    ColorUsageComponent,
    CopyVoiceComponent,
    LogosComponent,
    PhotographyComponent,
    TypographyComponent,

    /* getting started */
    GettingStartedComponent,
    MobileFirstComponent,
    PrototypingComponent,
    ResponsiveWebDesignComponent
  ]
})
export class DesignersModule { }
