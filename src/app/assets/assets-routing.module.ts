import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';

import { LogoComponent } from './logo/logo.component';

const assetRoutes: Routes = [
  {
    path: 'assets',
    component: AssetsComponent,
    children: [
      {
        path: 'logo',
        component: LogoComponent,
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
