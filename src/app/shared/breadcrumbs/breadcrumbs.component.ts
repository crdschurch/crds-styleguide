import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './breadcrumbs.component.html',
  selector: 'ddk-breadcrumbs'
})
export class BreadcrumbsComponent implements OnInit {

  public urlSegments: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.processUrl();
  }

  private processUrl() {
    let url = this.router.url;
    let path = '';
    url.split('/').forEach((segment) => {
      if (segment) {
        path += '/' + segment;
        this.urlSegments.push({ path: path, label: segment.replace('-', ' ') });
      }
    });
    this.urlSegments.splice(-1, 1);
  }

}
