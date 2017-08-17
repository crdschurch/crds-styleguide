import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule, DatepickerModule, ButtonsModule, AccordionModule } from 'ng2-bootstrap';

import { AppModule } from '../app.module';
import { UiComponentsComponent } from './ui-components.component';
import { UiRoutingModule } from './ui-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../shared/example/example.module';
import { JumbotronModule } from '../shared/jumbotron/jumbotron.module';

import { CoreModule } from './core/core.module';
import { AtomsModule } from './atoms/atoms.module';

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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule,
    TabsModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    ExampleModule,
    JumbotronModule,
    ContentBlockModule,
    CoreModule,
    AtomsModule
  ],
  exports: [
    UiComponentsComponent
  ],
  declarations: [
    UiComponentsComponent,
    SearchBarComponent,
    ComponentListComponent,

    CardsComponent,
    CardsDecksComponent,
    CardsTypesComponent,
    CardsGridLayoutComponent,

    /* sign in */
    SignInComponent,

    /* countdown */
    CountdownComponent,

    /* avatar groups */
    AvatarGroupsComponent,

    /* media objects */
    MediaObjectsComponent,

    /* jumbotrons */
    JumbotronsComponent,

    /* modals */
    VideoModalsComponent,

    /* fauxdals */
    FauxdalsComponent,

    /* accordions */
    AccordionComponent
  ]
})
export class UiComponentsModule { }
