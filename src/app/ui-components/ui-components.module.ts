import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule, DatepickerModule, ButtonsModule } from 'ng2-bootstrap';

import { AppModule } from '../app.module';
import { UiComponentsComponent } from './ui-components.component';
import { UiRoutingModule } from './ui-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ContentBlockModule } from '../shared/content-block/content-block.module';

import { CardsComponent } from './cards/cards.component';
import { SidebarNavComponent } from './cards/sidebar-nav/sidebar-nav.component';
import { BasicComponent } from './cards/basic/basic.component';
import { VariationsComponent } from './cards/variations/variations.component';
import { NoImageComponent } from './cards/no-image/no-image.component';
import { VideoComponent } from './cards/video/video.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { TypographyJumbotronComponent } from './typography/jumbotron/jumbotron.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';
import { WebFontsComponent } from './typography/web-fonts/web-fonts.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';
import { SwatchesComponent } from './colors/swatches/swatches.component';
import { ColorOverridesComponent } from './colors/overrides/overrides.component';

/* alerts */
import { AlertsComponent } from './alerts/alerts.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsJumbotronComponent } from './buttons/jumbotron/jumbotron.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* tables */
import { TablesComponent } from './tables/tables.component';
import { TablesJumbotronComponent } from './tables/jumbotron/jumbotron.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormsJumbotronComponent } from './forms/jumbotron/jumbotron.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule,
    TabsModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    ContentBlockModule
  ],
  exports: [
    UiComponentsComponent
  ],
  declarations: [
    UiComponentsComponent,
    SearchBarComponent,
    ComponentListComponent,

    /* typography */
    TypographyComponent,
    TypefacesComponent,
    HeadingsComponent,
    TypographyJumbotronComponent,
    TypesettingComponent,
    AddressComponent,
    BlockquoteComponent,
    ListsComponent,
    WebFontsComponent,

    /* colors */
    ColorsComponent,
    SwatchesComponent,
    ColorOverridesComponent,

    /* alerts */
    AlertsComponent,

    /* buttons */
    ButtonsComponent,
    ButtonsJumbotronComponent,
    ButtonStylesComponent,
    ButtonSizesComponent,
    ButtonGroupsComponent,

    /* tables */
    TablesComponent,
    TablesJumbotronComponent,

    /* forms */
    FormsComponent,
    FormsJumbotronComponent,
    FormControlsComponent,
    FormStatesComponent,
    FormDatepickerComponent,
    FormGroupsComponent,

    CardsComponent,
    SidebarNavComponent,
    BasicComponent,
    VariationsComponent,
    NoImageComponent,
    VideoComponent
  ]
})
export class UiComponentsModule { }
