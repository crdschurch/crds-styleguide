import { TestBed, async } from '@angular/core/testing';
import { IconDirectoryComponent } from './directory.component';
import { IconService } from '../../../../directives/icons/icons.service';

describe('Component: IconDirectory', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconDirectoryComponent
      ],
      providers: [
        IconService
      ]
    });
    this.fixture = TestBed.createComponent(IconDirectoryComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });
});
