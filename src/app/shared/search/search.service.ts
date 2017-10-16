import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ContentBlockModule } from 'crds-ng2-content-block';

import * as _ from 'lodash';

@Injectable()
export class SearchService {

  public results = [];

  constructor(private http: Http) {}

  public loadResults() {
    let url = 'https://crds-cms-uploads.s3.amazonaws.com/crds-styleguide/search-results.json';
    return this.http.get(url).map((res: Response) => res.json()).subscribe(data => {
      this.results = data;
      this.processResultBreadcrumbs();
    });
  }

  private processResultBreadcrumbs() {
    _.each(this.results, (result) => {
      result.breadcrumbs = _.initial(result.path.split('/'));
    });
  }

}
