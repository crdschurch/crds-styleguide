import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SearchService } from './search.service';

import * as _ from 'lodash';

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

  @HostListener('window:keyup', ['$event']) searchKeypress($event) {
    if ($event.key === '/') {
      document.getElementById('ddk-search').focus();
    }
    if ($event.key === 'ArrowDown') {
      let activeResults = _.filter(this.search.results, (r) => { return r.active; });
      let focusedResult = _.filter(activeResults, (r) => { return r.focused; })[0];
      let idx = _.indexOf(activeResults, focusedResult);

      if (focusedResult && activeResults.length > idx + 1) {
        activeResults[idx + 1].focused = true;
      } else if(!focusedResult) {
        activeResults[0].focused = true;
      }

      if (focusedResult) { focusedResult.focused = false; }
    }
    if ($event.key === 'ArrowUp') {
      let activeResults = _.filter(this.search.results, (r) => { return r.active; });
      let focusedResult = _.filter(activeResults, (r) => { return r.focused; })[0];
      let idx = _.indexOf(activeResults, focusedResult);

      if (focusedResult && idx > 0) {
        activeResults[idx - 1].focused = true;
      }

      if (focusedResult) { focusedResult.focused = false; }
    }
    if ($event.key === 'Enter') {
      let activeResults = _.filter(this.search.results, (r) => { return r.active; });
      let focusedResult = _.filter(activeResults, (r) => { return r.focused; })[0];

      if (focusedResult) {
        this.router.navigate([focusedResult.path]);
      }
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
