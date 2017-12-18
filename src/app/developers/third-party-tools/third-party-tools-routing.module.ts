import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ThirdPartyToolsComponent } from './third-party-tools.component';

import { ImgixComponent } from './imgix/imgix.component';
import { MapsComponent } from './maps/maps.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

const learnMoreRoutes: Routes = [
  {
    path: 'developers/third-party-tools',
    component: ThirdPartyToolsComponent,
    children: [
      {
        path: '',
        redirectTo: 'imgix',
        pathMatch: 'full'
      },
      {
        path: 'imgix',
        component: ImgixComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      },
      {
        path: 'ngx-charts',
        component: NgxChartsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(learnMoreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThirdPartyToolsRoutingModule {}
