import { Component, OnInit } from '@angular/core';

declare var imgix: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public loadImages() {
    imgix.init();

    let searchForm = document.getElementById('ddk-homepage-search-form');
    let container = document.getElementById('ddk-home-search-placeholder');
    if (searchForm && container) { container.appendChild(searchForm); }
  }

}
