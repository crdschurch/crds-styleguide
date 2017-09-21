import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { GettingStartedRoutingModule } from './getting-started-routing.module';

import { GettingStartedComponent } from './getting-started.component';

import { MobileFirstComponent } from './mobile-first/mobile-first.component';
import { PrototypingComponent } from './prototyping/prototyping.component';
import { ResponsiveWebDesignComponent } from './responsive-web-design/responsive-web-design.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    ContentBlockModule,
    JumbotronModule
  ],
  declarations: [
    GettingStartedComponent,
    MobileFirstComponent,
    PrototypingComponent,
    ResponsiveWebDesignComponent
  ]
})
export class GettingStartedModule {}
