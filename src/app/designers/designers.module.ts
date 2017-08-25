import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelinesModule } from './guidelines/guidelines.module';
import { GettingStartedModule } from './getting-started/getting-started.module';

@NgModule({
  imports: [
    CommonModule,
    GuidelinesModule,
    GettingStartedModule
  ]
})
export class DesignersModule {}
