import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule, DatepickerModule, ButtonsModule, AccordionModule } from 'ng2-bootstrap';

import { AppModule } from '../app.module';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../shared/example/example.module';
import { JumbotronModule } from '../shared/jumbotron/jumbotron.module';

import { CoreModule } from './core/core.module';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    ExampleModule,
    JumbotronModule,
    ContentBlockModule,
    CoreModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [],
  declarations: []
})
export class UiComponentsModule { }
