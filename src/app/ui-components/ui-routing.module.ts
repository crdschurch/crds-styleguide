import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';

import { ComponentListComponent } from './component-list/component-list.component';

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
import { UtilitiesJumbotronComponent } from './utilities/jumbotron/jumbotron.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { CornersComponent } from './utilities/corners/corners.component';
import { DisplayComponent } from './utilities/display/display.component';
import { ImagesComponent } from './utilities/images/images.component';
import { MarginComponent } from './utilities/margin/margin.component';
import { PaddingComponent } from './utilities/padding/padding.component';
import { TextComponent } from './utilities/text/text.component';
import { VerticalPositioningComponent } from './utilities/vertical-positioning/vertical-positioning.component';

/* Feedback */
import { FeedbackComponent } from './feedback/feedback.component';
import { AlertsComponent } from './feedback/alerts/alerts.component';
import { ToastNotificationsComponent } from './feedback/toast-notifications/toast-notifications.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* icons */
import { IconsComponent } from './icons/icons.component';
import { IconDirectoryComponent } from './icons/directory/directory.component';
import { IconInlineComponent } from './icons/inline-svg/inline-svg.component';
import { IconCssComponent } from './icons/css-svg/css-svg.component';
import { IconResizeComponent } from './icons/resize-svg/resize-svg.component';
import { IconColorsComponent } from './icons/colors/colors.component';

/* tables */
import { TablesComponent } from './tables/tables.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { SearchFieldComponent } from './forms/search/search.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

/* labels */
import { LabelsComponent } from './labels/labels.component';

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

/* media images */
import { MediaImgComponent } from './media-img/media-img.component';

/* jumbotrons */
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';

/* fauxdals */
import { FauxdalsComponent } from './fauxdals/fauxdals.component';

const uiRoutes: Routes = [
  {
    path: 'ui',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        component: ComponentListComponent
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
        path: 'buttons',
        component: ButtonsComponent,
        children: [
          {
            path: '',
            redirectTo: 'styles',
            pathMatch: 'full'
          },
          {
            path: 'styles',
            component: ButtonStylesComponent
          },
          {
            path: 'sizes',
            component: ButtonSizesComponent
          },
          {
            path: 'groups',
            component: ButtonGroupsComponent
          }
        ]
      },
      {
        path: 'icons',
        component: IconsComponent,
        children: [
          {
            path: '',
            redirectTo: 'directory',
            pathMatch: 'full'
          },
          {
            path: 'directory',
            component: IconDirectoryComponent
          },
          {
            path: 'inline-svg',
            component: IconInlineComponent
          },
          {
            path: 'css-svg',
            component: IconCssComponent
          },
          {
            path: 'resize-svg',
            component: IconResizeComponent
          },
          {
            path: 'colors',
            component: IconColorsComponent
          }
        ]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        children: [
          {
            path: '',
            redirectTo: 'alerts',
            pathMatch: 'full'
          },
          {
            path: 'alerts',
            component: AlertsComponent
          },
          {
            path: 'toast-notifications',
            component: ToastNotificationsComponent
          }
        ]
      },
      {
        path: 'labels',
        component: LabelsComponent
      },

      {
        path: 'loaders',
        component: LoadersComponent
      },
      {
        path: 'forms',
        component: FormsComponent,
        children: [
          {
            path: '',
            redirectTo: 'controls',
            pathMatch: 'full'
          },
          {
            path: 'controls',
            component: FormControlsComponent
          },
          {
            path: 'states',
            component: FormStatesComponent
          },
          {
            path: 'datepicker',
            component: FormDatepickerComponent
          },
          {
            path: 'search',
            component: SearchFieldComponent
          },
          {
            path: 'groups',
            component: FormGroupsComponent
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
      },
      {
        path: 'tables',
        component: TablesComponent
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
        path: 'media-images',
        component: MediaImgComponent
      },
      {
        path: 'jumbotrons',
        component: JumbotronsComponent
      },
      {
        path: 'fauxdals',
        component: FauxdalsComponent
      },
      {
        path: 'countdown',
        component: CountdownComponent
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
