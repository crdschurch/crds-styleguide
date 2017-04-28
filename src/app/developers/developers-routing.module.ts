import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';
import { BuiltOnBootstrapComponent } from './built-on-bootstrap/built-on-bootstrap.component';
import { CodingStyleComponent } from './coding-style/coding-style.component';
import { ContributionTipsComponent } from './contribution-tips/contribution-tips.component';
import { CssSassComponent } from './css-sass/css-sass.component';

import { CustomNpmPackagesComponent } from './custom-npm-packages/custom-npm-packages.component';
import { OverviewDryComponent } from './custom-npm-packages/overview-dry/overview-dry.component';
import { ContentBlocksComponent } from './custom-npm-packages/content-blocks/content-blocks.component';
import { ReactiveSsoComponent } from './custom-npm-packages/reactive-sso/reactive-sso.component';
import { SharedHeaderComponent } from './custom-npm-packages/shared-header/shared-header.component';
import { CustomNpmPackagesJumbotronComponent } from './custom-npm-packages/custom-npm-packages-jumbotron/custom-npm-packages-jumbotron.component';

import { FileStructureComponent } from './file-structure/file-structure.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GridComponent } from './grid/grid.component';
import { ImgixComponent } from './imgix/imgix.component';
import { InstallationComponent } from './installation/installation.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { Ng2ComponentsComponent } from './ng2-components/ng2-components.component';
import { WebFontsComponent } from './web-fonts/web-fonts.component';

const developerRoutes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent,
    children: [
      {
        path: 'intro',
        component: DevelopersIntroComponent
      },
      {
        path: 'built-on-bootstrap',
        component: BuiltOnBootstrapComponent
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
        path: 'css-sass',
        component: CssSassComponent
      },
      {
        path: 'custom-npm-packages',
        component: CustomNpmPackagesComponent,
        children: [
          {
            path: '',
            redirectTo: 'overview-dry',
            pathMatch: 'full'
          },
          {
            path: 'overview-dry',
            component: OverviewDryComponent
          },
          {
            path: 'shared-header',
            component: SharedHeaderComponent
          },
          {
            path: 'reactive-sso',
            component: ReactiveSsoComponent
          },
          {
            path: 'content-blocks',
            component: ContentBlocksComponent
          }
        ]
      },
      {
        path: 'file-structure',
        component: FileStructureComponent
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'imgix',
        component: ImgixComponent
      },
      {
        path: 'installation',
        component: InstallationComponent
      },
      {
        path: 'naming-conventions',
        component: NamingConventionsComponent
      },
      {
        path: 'ng2-components',
        component: Ng2ComponentsComponent
      },
      {
        path: 'web-fonts',
        component: WebFontsComponent
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
