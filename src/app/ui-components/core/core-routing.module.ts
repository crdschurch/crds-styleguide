import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { FontScalingComponent } from './typography/font-scaling/font-scaling.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
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
import { StickyComponent } from './utilities/sticky/sticky.component';
import { TextComponent } from './utilities/text/text.component';
import { ButtonUtilitiesComponent } from './utilities/buttons/buttons.component';
import { VerticalPositioningComponent } from './utilities/vertical-positioning/vertical-positioning.component';

const learnMoreRoutes: Routes = [
  {
    path: 'ui-components/core',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        children: [
          {
            path: '',
            redirectTo: 'swatches',
            pathMatch: 'full'
          },
          {
            path: 'swatches',
            component: SwatchesComponent
          },
          {
            path: 'overrides',
            component: ColorOverridesComponent
          },
          {
            path: 'backgrounds',
            component: ColorBackgroundsComponent
          },
          {
            path: 'text',
            component: ColorTextComponent
          }
        ]
      },
      {
        path: 'utilities',
        component: UtilitiesComponent,
        children: [
          {
            path: '',
            redirectTo: 'borders',
            pathMatch: 'full'
          },
          {
            path: 'borders',
            component: BordersComponent
          },
          {
            path: 'buttons',
            component: ButtonUtilitiesComponent
          },
          {
            path: 'corners',
            component: CornersComponent
          },
          {
            path: 'display',
            component: DisplayComponent
          },
          {
            path: 'images',
            component: ImagesComponent
          },
          {
            path: 'margin',
            component: MarginComponent
          },
          {
            path: 'padding',
            component: PaddingComponent
          },
          {
            path: 'sticky',
            component: StickyComponent
          },
          {
            path: 'text',
            component: TextComponent
          },
          {
            path: 'vertical-positioning',
            component: VerticalPositioningComponent
          }
        ]
      },
      {
        path: 'typography',
        component: TypographyComponent,
        children: [
          {
            path: '',
            redirectTo: 'typefaces',
            pathMatch: 'full'
          },
          {
            path: 'typefaces',
            component: TypefacesComponent
          },
          {
            path: 'web-fonts',
            component: WebFontsComponent
          },
          {
            path: 'font-scaling',
            component: FontScalingComponent
          },
          {
            path: 'typesetting',
            component: TypesettingComponent
          },
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'blockquote',
            component: BlockquoteComponent
          },
          {
            path: 'lists',
            component: ListsComponent
          }
        ]
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
export class CoreRoutingModule {}
