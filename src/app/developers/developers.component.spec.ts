/* tslint:disable:no-unused-variable */

import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DevelopersComponent } from './developers.component';

describe('Component: Developers', () => {

  let component: DevelopersComponent;
  let fixture: ComponentFixture<DevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DevelopersComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

});
