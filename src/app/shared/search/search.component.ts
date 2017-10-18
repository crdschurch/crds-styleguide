import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SearchService } from './search.service';

import * as _ from 'lodash';

@Component({
  selector: 'search-form',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {

  @Input() hideForPaths: Array<string> = [];

  public searchValue: string;
  public visible = true;

  constructor(private router: Router, private search: SearchService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.searchValue = null;
        this.setAllInactive();
        this.verifyVisibility();
      }
    });
  }

  ngOnInit() {
    this.search.loadResults();
    this.searchValue = null;
    this.setAllInactive();

  }

  @HostListener('window:keyup', ['$event']) searchKeypress($event) {
    if ($event.key === '/') {
      document.getElementById('ddk-search').focus();
    }
  }

  public searchKeyup($event, value: string) {
    this.updateSearchResults(value);
    if ($event.key === 'ArrowDown') {
      let activeResults = _.filter(this.search.results, (r) => { return r.active; });
      let focusedResult = _.filter(activeResults, (r) => { return r.focused; })[0];
      let idx = _.indexOf(activeResults, focusedResult);

      if (focusedResult && activeResults.length > idx + 1) {
        activeResults[idx + 1].focused = true;
      } else if (!focusedResult) {
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
        let options = {};
        if (focusedResult.fragment) { options['fragment'] = focusedResult.fragment; }
        this.router.navigate([focusedResult.path], options);
        document.getElementById('ddk-search').blur();
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

  private verifyVisibility() {
    this.visible = true;
    _.forEach(this.hideForPaths, (path) => {
      if (this.router.url === path) {
        this.visible = false;
      }
    });
  }
}
