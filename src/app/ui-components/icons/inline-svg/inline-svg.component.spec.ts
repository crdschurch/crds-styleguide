import { TestBed, async } from '@angular/core/testing';
import { IconInlineComponent } from './inline-svg.component';
import { IconService } from '../../../directives/icons/icons.service';

describe('Component: IconInline', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconInlineComponent
      ],
      providers: [
        IconService
      ]
    });
    this.fixture = TestBed.createComponent(IconInlineComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
