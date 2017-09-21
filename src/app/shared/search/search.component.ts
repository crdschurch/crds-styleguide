import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SearchService } from './search.service';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {

  searchValue: string;

  constructor(private router: Router, private search: SearchService) {

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.searchValue = null;
        this.setAllInactive();
      }
    });
  }

  ngOnInit() {
    this.searchValue = null;
    this.setAllInactive();
  }

  @HostListener('window:keyup', ['$event'])
  focusOnSearch($event) {
    if ($event.key === '/') {
      document.getElementById('ddk-search').focus();
    }
  }

  public validateChar(event) {
    const pattern = /^[a-z0-9\-\ ]+$/i;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  public updateSearchResults(value: string) {
    this.searchValue = value;
    this.setAllInactive();
    if (!this.searchValue) {
      return true;
    }
    let q = this.searchValue.toLowerCase();
    this.search.results.forEach((result) => {
      if (result.name.toLowerCase().search(q) >= 0) {
        result.active = true;
      }
    });
  }

  private setAllInactive() {
    this.search.results.forEach((result) => {
      result.active = false;
    });
  }

}
