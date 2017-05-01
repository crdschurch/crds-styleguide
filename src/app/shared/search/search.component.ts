import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SEARCH_RESULTS } from './search-results';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html'
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

  public init() {
    this.setAllInactive();
  }

  public updateSearchResults(event: any) {
    this.setAllInactive();
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
