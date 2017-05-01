/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesignersComponent } from './designers.component';

describe('Component: Designers', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignersComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    this.fixture = TestBed.createComponent(DesignersComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
