import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedComponent } from './getting-started.component';

import { MobileFirstComponent } from './mobile-first/mobile-first.component';
import { PrototypingComponent } from './prototyping/prototyping.component';
import { ResponsiveWebDesignComponent } from './responsive-web-design/responsive-web-design.component';

const gettingStartedRoutes: Routes = [
  {
    path: 'designers/getting-started',
    component: GettingStartedComponent,
    children: [
      {
        path: '',
        redirectTo: 'mobile-first',
        pathMatch: 'full'
      },
      {
        path: 'mobile-first',
        component: MobileFirstComponent
      },
      {
        path: 'prototyping',
        component: PrototypingComponent
      },
      {
        path: 'responsive-web-design',
        component: ResponsiveWebDesignComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(gettingStartedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GettingStartedRoutingModule {}
