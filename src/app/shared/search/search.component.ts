import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SEARCH_RESULTS } from './search-results';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
})

export class SearchComponent {

  public searchValue = '';

  private _searchResults: Array<any>;

  constructor(private router: Router) {
    this._searchResults = SEARCH_RESULTS;
    this.init();

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.searchValue = null;
        this.setAllInactive();
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  focusOnSearch($event) {
    if ($event.key === '/') {
      document.getElementById('ddk-search').focus();
    }
  }


  public init() {
    this.setAllInactive();
  }

  public validateChar(event) {
    const pattern = /^[a-z0-9\-\ ]+$/i;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  public updateSearchResults(event: any) {
    this.setAllInactive();
    if (!this.searchValue) {
      return true;
    }
    let q = this.searchValue.toLowerCase();
    this._searchResults.forEach((result) => {
      if (result.name.toLowerCase().search(q) >= 0) {
        result.active = true;
      }
    });
  }

  private setAllInactive() {
    this._searchResults.forEach((result) => {
      result.active = false;
    });
  }

}
