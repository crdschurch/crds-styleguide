import { TestBed } from '@angular/core/testing';
import { ColorTextComponent } from './text.component';
import { ExampleModule } from '../../../../shared/example/example.module';
import { HttpModule } from '@angular/http';

import { ThemeToggleSwitchService } from '../../../../directives/theme-toggle-switch/theme-toggle-switch.service';

describe('Component: ColorTextComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleModule, HttpModule],
      declarations: [ColorTextComponent],
      providers: [ThemeToggleSwitchService]
    });
    this.fixture = TestBed.createComponent(ColorTextComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
