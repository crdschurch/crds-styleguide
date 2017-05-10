import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private arr: Array<any> = ['one','two'];

  constructor() { }

  ngOnInit() {
  }

}
