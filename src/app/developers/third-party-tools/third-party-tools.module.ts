import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../../shared/example/example.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { ThirdPartyToolsRoutingModule } from './third-party-tools-routing.module';

import { ThirdPartyToolsComponent } from './third-party-tools.component';

import { ImgixComponent } from './imgix/imgix.component';
import { MapsComponent } from './maps/maps.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyToolsRoutingModule,
    ContentBlockModule,
    ExampleModule,
    JumbotronModule
  ],
  declarations: [
    ThirdPartyToolsComponent,
    ImgixComponent,
    MapsComponent,
    NgxChartsComponent
  ]
})
export class ThirdPartyToolsModule {}
