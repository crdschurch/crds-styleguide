import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers.component';

import { DevelopersIntroComponent } from './intro/intro.component';

const developerRoutes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent,
    children: [
      {
        path: '',
        component: DevelopersIntroComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(developerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeveloperRoutingModule {}
