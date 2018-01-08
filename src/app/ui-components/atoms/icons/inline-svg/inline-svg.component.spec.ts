import { TestBed, async } from '@angular/core/testing';
import { IconInlineComponent } from './inline-svg.component';
import { IconService } from '../../../../directives/icons/icons.service';

import { HttpModule } from '@angular/http';
import { ExampleModule } from '../../../../shared/example/example.module';

import { ThemeToggleSwitchService } from '../../../../directives/theme-toggle-switch/theme-toggle-switch.service';

describe('Component: IconInline', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ExampleModule
      ],
      declarations: [
        IconInlineComponent
      ],
      providers: [
        IconService,
        ThemeToggleSwitchService
      ]
    });
    this.fixture = TestBed.createComponent(IconInlineComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
