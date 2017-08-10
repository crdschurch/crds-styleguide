import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';
import { BuiltOnBootstrapComponent } from './built-on-bootstrap/built-on-bootstrap.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';
import { ContributionTipsComponent } from './contribution-tips/contribution-tips.component';
import { CssSassComponent } from './css-sass/css-sass.component';

import { CustomNpmPackagesComponent } from './custom-npm-packages/custom-npm-packages.component';
import { FileStructureComponent } from './file-structure/file-structure.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GridComponent } from './grid/grid.component';
import { InstallationComponent } from './installation/installation.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { WebFontsComponent } from './web-fonts/web-fonts.component';

import { ImgixComponent } from './imgix/imgix.component';
import { MapsComponent } from './maps/maps.component';

const developerRoutes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent,
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      },
      {
        path: 'intro',
        component: DevelopersIntroComponent
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent
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
        path: 'contribution-tips',
        component: ContributionTipsComponent
      },
      {
        path: 'naming-conventions',
        component: NamingConventionsComponent
      },
      {
        path: 'file-structure',
        component: FileStructureComponent
      },
      {
        path: 'built-on-bootstrap',
        component: BuiltOnBootstrapComponent
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
       },
      {
        path: 'imgix',
        component: ImgixComponent
      },
      {
        path: 'maps',
        component: MapsComponent
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
