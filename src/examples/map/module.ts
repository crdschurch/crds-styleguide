import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArKsBK97N0Wi-69x10OL7Sx57Fwlmu6Cs'
    })
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapContentComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
