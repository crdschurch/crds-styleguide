import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignersComponent } from './designers.component';

/* guidelines */
import { GuidelinesComponent } from './guidelines/guidelines.component';
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

const designersRoutes: Routes = [
  {
    path: 'designers',
    component: DesignersComponent,
    children: [
      {
        path: '',
        component: DesignersComponent
      },
      {
        path: 'guidelines',
        component: GuidelinesComponent,
        children: [
          {
            path: '',
            redirectTo: 'color-usage',
            pathMatch: 'full'
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
      },
      {
        path: 'getting-started',
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
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(designersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DesignersRoutingModule {}
