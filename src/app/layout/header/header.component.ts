import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed: Boolean = true;

  constructor(private router: Router) {}

  ngOnInit () {
    document.body.addEventListener('click', (event: any) => {
      for (let i = 0; i < event.path.length; i++) {
        if (event.path[i].classList && event.path[i].classList.contains('ddk-navbar')) {
          return;
        }
      }

      let openMenu = document.querySelector('.ddk-navbar li.open');

      if (openMenu) {
        openMenu.classList.remove('open');
      }

      this.isMenuCollapsed = true;
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      this.isMenuCollapsed = true;
    });
  }
}
