import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoleculesComponent } from './molecules.component';

/* sign-in */
import { SignInComponent } from './sign-in/sign-in.component';

/* avatar groups */
import { AvatarGroupsComponent } from './avatar-groups/avatar-groups.component';

/* media objects */
import { MediaObjectsComponent } from './media-objects/media-objects.component';

/* cards */
import { CardsComponent } from './cards/cards.component';
import { CardsTypesComponent } from './cards/types/types.component';
import { CardsDecksComponent } from './cards/card-decks/card-decks.component';
import { CardsGridLayoutComponent } from './cards/grid-layout/grid-layout.component';

/* countdown */
import { CountdownComponent } from './countdown/countdown.component';

/* jumbotrons */
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';

/* modals */
import { ModalsComponent } from './modals/modals.component';
import { DefaultModalComponent } from './modals/default/default-modal.component';
import { FullPageModalComponent } from './modals/full-page/full-page-modal.component';
import { VideoModalComponent } from './modals/video/video-modal.component';

/* fauxdals */
import { FauxdalsComponent } from './fauxdals/fauxdals.component';

/* fauxdals */
import { AccordionComponent } from './accordion/accordion.component';

/* charts */
import { ChartsComponent } from './charts/charts.component';

const learnMoreRoutes: Routes = [
  {
    path: 'ui-components/molecules',
    component: MoleculesComponent,
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'cards',
        component: CardsComponent,
        children: [
          {
            path: '',
            redirectTo: 'types',
            pathMatch: 'full'
          },
          {
            path: 'types',
            component: CardsTypesComponent
          },
          {
            path: 'grid-layout',
            component: CardsGridLayoutComponent
          },
          {
            path: 'card-decks',
            component: CardsDecksComponent
          }
        ]
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'avatar-groups',
        component: AvatarGroupsComponent
      },
      {
        path: 'media-objects',
        component: MediaObjectsComponent
      },
      {
        path: 'jumbotrons',
        component: JumbotronsComponent
      },
      {
        path: 'modals',
        component: ModalsComponent,
        children: [
          {
            path: '',
            redirectTo: 'default',
            pathMatch: 'full'
          },
          {
            path: 'default',
            component: DefaultModalComponent
          },
          {
            path: 'full-page',
            component: FullPageModalComponent
          },
          {
            path: 'video',
            component: VideoModalComponent
          }
        ]
      },
      {
        path: 'fauxdals',
        component: FauxdalsComponent
      },
      {
        path: 'countdown',
        component: CountdownComponent
      },
      {
        path: 'accordion',
        component: AccordionComponent
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
export class MoleculesRoutingModule {}
