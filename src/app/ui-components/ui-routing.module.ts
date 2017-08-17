import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';

import { ComponentListComponent } from './component-list/component-list.component';

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
import { VideoModalsComponent } from './video-modals/video-modals.component';

/* fauxdals */
import { FauxdalsComponent } from './fauxdals/fauxdals.component';

/* fauxdals */
import { AccordionComponent } from './accordion/accordion.component';

const uiRoutes: Routes = [
  {
    path: 'ui-components',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        component: ComponentListComponent
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
        path: 'video-modals',
        component: VideoModalsComponent
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
    RouterModule.forRoot(uiRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiRoutingModule {}
