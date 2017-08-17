import { TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http  } from '@angular/http';
import { ElementRef, Renderer } from '@angular/core';
import { TablesComponent } from './tables.component';

describe('Component: Tables', () => {
  it('should create an instance', () => {
    let component = new TablesComponent();
    expect(component).toBeTruthy();
  });
});
