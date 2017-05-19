import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';

import { LogosComponent } from './logos/logos.component';

const assetRoutes: Routes = [
  {
    path: 'assets',
    component: AssetsComponent,
    children: [
      {
        path: 'logos',
        component: LogosComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(assetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AssetsRoutingModule {}
