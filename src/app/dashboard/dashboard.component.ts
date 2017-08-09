import { Component, OnInit } from '@angular/core';

declare var imgix: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public loadImages() {
    imgix.init();
  }

}
