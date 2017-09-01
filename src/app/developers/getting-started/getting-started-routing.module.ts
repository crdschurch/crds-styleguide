import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedComponent } from './getting-started.component';

import { IntroComponent } from './intro/intro.component';
import { InstallationComponent } from './installation/installation.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';
import { FileStructureComponent } from './file-structure/file-structure.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { ContributionTipsComponent } from './contribution-tips/contribution-tips.component';

const gettingStartedRoutes: Routes = [
  {
    path: 'developers/getting-started',
    component: GettingStartedComponent,
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
        path: 'installation',
        component: InstallationComponent
      },
      {
        path: 'coding-style',
        component: CodingStyleComponent
      },
      {
        path: 'file-structure',
        component: FileStructureComponent
      },
      {
        path: 'naming-conventions',
        component: NamingConventionsComponent
      },
      {
        path: 'contribution-tips',
        component: ContributionTipsComponent
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
