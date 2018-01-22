/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { ThemeToggleSwitchComponent } from '../../directives/theme-toggle-switch/theme-toggle-switch.component';
import { ThemeToggleSwitchService } from '../../directives/theme-toggle-switch/theme-toggle-switch.service';
import { SearchComponent } from '../../shared/search/search.component';
import { SearchService } from '../../shared/search/search.service';
import { CollapseModule } from 'ng2-bootstrap';

describe('Component: Header', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ThemeToggleSwitchComponent,
        SearchComponent
      ],
      imports: [
        CollapseModule,
        RouterTestingModule.withRoutes([]),
        HttpModule
      ],
      providers: [
        SearchService,
        ThemeToggleSwitchService
      ]
    });
  });
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
