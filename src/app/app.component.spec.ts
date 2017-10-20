/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapseModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ThemeToggleSwitchComponent } from './directives/theme-toggle-switch/theme-toggle-switch.component';
import { ContentBlockModule } from 'crds-ng2-content-block';
import { ScrollToModule } from 'ng2-scroll-to';

import { SearchComponent } from './shared/search/search.component';
import { SearchService } from './shared/search/search.service';


describe('App: CrdsDdk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ThemeToggleSwitchComponent,
        SearchComponent
      ],
      imports: [
        CollapseModule,
        ContentBlockModule.forRoot({ endpoint: 'https://contentint.crossroads.net/', categories: Array('ddk') }),
        ScrollToModule.forRoot(),
        HttpModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        SearchService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
