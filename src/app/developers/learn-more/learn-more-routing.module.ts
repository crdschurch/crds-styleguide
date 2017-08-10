import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LearnMoreComponent } from './learn-more.component';

import { BuiltOnBootstrapComponent } from './built-on-bootstrap/built-on-bootstrap.component';
import { CssSassComponent } from './css-sass/css-sass.component';
import { GridComponent } from './grid/grid.component';
import { WebFontsComponent } from './web-fonts/web-fonts.component';
import { CustomNpmPackagesComponent } from './custom-npm-packages/custom-npm-packages.component';

const learnMoreRoutes: Routes = [
  {
    path: 'developers/learn-more',
    component: LearnMoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'built-on-bootstrap',
        pathMatch: 'full'
      },
      {
        path: 'built-on-bootstrap',
        component: BuiltOnBootstrapComponent
      },
      {
        path: 'css-sass',
        component: CssSassComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'web-fonts',
        component: WebFontsComponent
      },
      {
        path: 'custom-npm-packages',
        component: CustomNpmPackagesComponent
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
export class LearnMoreRoutingModule {}
