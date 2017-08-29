import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../../shared/example/example.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { FontScalingComponent } from './typography/font-scaling/font-scaling.component';
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
import { ColorBackgroundsComponent } from './colors/backgrounds/backgrounds.component';
import { ColorTextComponent } from './colors/text/text.component';

/* utility classes */
import { UtilitiesComponent } from './utilities/utilities.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { CornersComponent } from './utilities/corners/corners.component';
import { DisplayComponent } from './utilities/display/display.component';
import { ImagesComponent } from './utilities/images/images.component';
import { MarginComponent } from './utilities/margin/margin.component';
import { PaddingComponent } from './utilities/padding/padding.component';
import { TextComponent } from './utilities/text/text.component';
import { ButtonUtilitiesComponent } from './utilities/buttons/buttons.component';
import { VerticalPositioningComponent } from './utilities/vertical-positioning/vertical-positioning.component';

@NgModule({
  imports: [
    CommonModule,
    ContentBlockModule,
    CoreRoutingModule,
    ExampleModule,
    JumbotronModule
  ],
  declarations: [
    AddressComponent,
    BlockquoteComponent,
    BordersComponent,
    ButtonUtilitiesComponent,
    ColorBackgroundsComponent,
    ColorOverridesComponent,
    ColorsComponent,
    ColorTextComponent,
    CoreComponent,
    CornersComponent,
    DisplayComponent,
    FontScalingComponent,
    ImagesComponent,
    ListsComponent,
    MarginComponent,
    PaddingComponent,
    SwatchesComponent,
    TextComponent,
    TypefacesComponent,
    TypesettingComponent,
    TypographyComponent,
    TypographyJumbotronComponent,
    UtilitiesComponent,
    VerticalPositioningComponent,
    WebFontsComponent
  ]
})
export class CoreModule {}
