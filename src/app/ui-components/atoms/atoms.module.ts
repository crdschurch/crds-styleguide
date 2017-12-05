import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ng2-bootstrap';

import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../../shared/example/example.module';
import { JumbotronModule } from '../../shared/jumbotron/jumbotron.module';

import { AtomsRoutingModule } from './atoms-routing.module';

import { AtomsComponent } from './atoms.component';

/* feedback */
import { FeedbackComponent } from './feedback/feedback.component';
import { AlertsComponent } from './feedback/alerts/alerts.component';
import { ToastNotificationsComponent } from './feedback/toast-notifications/toast-notifications.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonStatesComponent } from './buttons/states/states.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';
import { ButtonPlacementComponent } from './buttons/placement/placement.component';

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
import { FormInputsComponent } from './forms/inputs/inputs.component';
import { FormRadiosComponent } from './forms/radios/radios.component';
import { FormCheckboxesComponent } from './forms/checkboxes/checkboxes.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormTimepickerComponent } from './forms/timepicker/timepicker.component';
import { SearchFieldComponent } from './forms/search/search.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

/* labels */
import { LabelsComponent } from './labels/labels.component';

/* media images */
import { MediaImgComponent } from './media-img/media-img.component';

@NgModule({
  imports: [
    AtomsRoutingModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ContentBlockModule,
    ExampleModule,
    FormsModule,
    JumbotronModule
  ],
  declarations: [
    AlertsComponent,
    AtomsComponent,
    ButtonGroupsComponent,
    ButtonPlacementComponent,
    ButtonsComponent,
    ButtonStatesComponent,
    ButtonStylesComponent,
    FeedbackComponent,
    FormInputsComponent,
    FormRadiosComponent,
    FormCheckboxesComponent,
    FormDatepickerComponent,
    FormGroupsComponent,
    FormsComponent,
    FormStatesComponent,
    FormTimepickerComponent,
    IconColorsComponent,
    IconCssComponent,
    IconDirectoryComponent,
    IconInlineComponent,
    IconResizeComponent,
    IconsComponent,
    LabelsComponent,
    LoadersComponent,
    MediaImgComponent,
    SearchFieldComponent,
    TablesComponent,
    ToastNotificationsComponent
  ]
})
export class AtomsModule {}
