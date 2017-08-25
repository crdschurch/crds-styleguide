import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GuidelinesComponent } from './guidelines.component';

import { IntroComponent } from './intro/intro.component';
import { ColorUsageComponent } from './color-usage/color-usage.component';
import { CopyVoiceComponent } from './copy-voice/copy-voice.component';
import { LogosComponent } from './logos/logos.component';
import { PhotographyComponent } from './photography/photography.component';
import { TypographyComponent } from './typography/typography.component';

const guidelinesRoutes: Routes = [
  {
    path: 'designers',
    redirectTo: 'designers/guidelines/intro',
    pathMatch: 'full'
  },
  {
    path: 'designers/guidelines',
    component: GuidelinesComponent,
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      },
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'color-usage',
        component: ColorUsageComponent
      },
      {
        path: 'copy-voice',
        component: CopyVoiceComponent
      },
      {
        path: 'logos',
        component: LogosComponent
      },
      {
        path: 'photography',
        component: PhotographyComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(guidelinesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuidelinesRoutingModule {}
