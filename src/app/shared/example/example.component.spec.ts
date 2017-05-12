import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { ExampleComponent } from './example.component';

describe('Component: IconCss', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [
        ExampleComponent
      ]
    });
    this.fixture = TestBed.createComponent(ExampleComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

  it('should return filetype based on path extension', () => {
    expect(this.component.getFileType('//something/something/something.js')).toBe('javascript');
    expect(this.component.getFileType('//something/something/something.css')).toBe('css');
    expect(this.component.getFileType('//something/something/something.ts')).toBe('typescript');
    expect(this.component.getFileType('//something/something/something.html')).toBe('markup');
  });

});
