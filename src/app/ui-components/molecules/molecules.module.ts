import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ng2-bootstrap';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../../shared/example/example.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { MoleculesRoutingModule } from './molecules-routing.module';

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
import { CardsGridLayoutComponent } from './cards/grid-layout/grid-layout.component';
import { CardsDecksComponent } from './cards/card-decks/card-decks.component';

/* countdown */
import { CountdownComponent } from './countdown/countdown.component';

/* jumbotrons */
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';

/* modals */
import { VideoModalsComponent } from './video-modals/video-modals.component';

/* fauxdals */
import { FauxdalsComponent } from './fauxdals/fauxdals.component';

/* accordions */
import { AccordionComponent } from './accordion/accordion.component';

/* charts */
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [
    ButtonsModule,
    CommonModule,
    ContentBlockModule,
    ExampleModule,
    FormsModule,
    MoleculesRoutingModule,
    JumbotronModule
  ],
  declarations: [
    AccordionComponent,
    AvatarGroupsComponent,
    CardsComponent,
    CardsDecksComponent,
    CardsGridLayoutComponent,
    CardsTypesComponent,
    ChartsComponent,
    CountdownComponent,
    FauxdalsComponent,
    JumbotronsComponent,
    MediaObjectsComponent,
    MoleculesComponent,
    SignInComponent,
    VideoModalsComponent
  ]
})
export class MoleculesModule {}
