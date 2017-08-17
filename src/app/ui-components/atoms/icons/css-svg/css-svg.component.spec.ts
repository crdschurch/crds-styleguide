import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { IconCssComponent } from './css-svg.component';
import { IconService } from '../../../../directives/icons/icons.service';
import { ExampleModule } from '../../../../shared/example/example.module';

describe('Component: IconCss', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleModule, HttpModule],
      declarations: [
        IconCssComponent
      ],
      providers: [
        IconService
      ]
    });
    this.fixture = TestBed.createComponent(IconCssComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });
});
