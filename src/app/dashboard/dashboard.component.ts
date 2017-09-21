import { Component, OnInit } from '@angular/core';

import { SearchService } from '../shared/search/search.service';

declare var imgix: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private search: SearchService) {}

  public loadImages() {
    imgix.init();

    this.search.loadResults();

    let searchForm = document.getElementById('ddk-homepage-search-form');
    let container = document.getElementById('ddk-home-search-placeholder');
    if (container) { container.appendChild(searchForm); }
  }

}
