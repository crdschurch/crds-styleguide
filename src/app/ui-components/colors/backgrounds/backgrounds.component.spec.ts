import { TestBed } from '@angular/core/testing';
import { ColorBackgroundsComponent } from './backgrounds.component';
import { ExampleModule } from '../../../shared/example/example.module';
import { HttpModule } from '@angular/http';

describe('Component: ColorBackgroundsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleModule, HttpModule],
      declarations: [ColorBackgroundsComponent]
    });
    this.fixture = TestBed.createComponent(ColorBackgroundsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
