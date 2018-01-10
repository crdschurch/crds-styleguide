import { TestBed } from '@angular/core/testing';
import { ColorBackgroundsComponent } from './backgrounds.component';
import { ExampleModule } from '../../../../shared/example/example.module';
import { HttpModule } from '@angular/http';

import { ThemeToggleSwitchService } from '../../../../directives/theme-toggle-switch/theme-toggle-switch.service';

describe('Component: ColorBackgroundsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleModule, HttpModule],
      declarations: [ColorBackgroundsComponent],
      providers: [ThemeToggleSwitchService]
    });
    this.fixture = TestBed.createComponent(ColorBackgroundsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
