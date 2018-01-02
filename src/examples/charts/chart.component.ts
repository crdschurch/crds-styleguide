import { Component, OnInit } from '@angular/core';

declare const SVG;

@Component({
  selector: 'svg-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  bars = {
    thing1: {
      value: 2.7,
      top: 228
    },
    thing2: {
      value: 2.4,
      top: 171
    },
    thing3: {
      value: 1.8,
      top: 114
    },
    thing4: {
      value: 1.2,
      top: 57
    },
    thing5: {
      value: 0.6,
      top: 0
    }
  };

  svg: any;

  colors = ['#3B6E8F', '#0095D9', '#57AFA9', '#C05C04', '#E09E06'];
  currentColor = '#57AFA9';

  constructor() {}

  ngOnInit() {
    this.svg = SVG.get('my-chart');
    this.initBarPaths();
  }

  public changeColor() {
    let newColor = this.getRandomColor();
    while (newColor === this.currentColor) {
      newColor = this.getRandomColor();
    }
    this.currentColor = newColor;
    this.svg.select('#bar-group').animate(250).attr({ fill: this.currentColor });
  }

  private initBarPaths() {
    for (let name in this.bars) {
      if (name) {
        const bar = this.bars[name];
        const svgBar = this.getBar(name);
        svgBar.attr({ d: this.getPathArray(bar, 0) });
        svgBar.animate(750, '<>', 0).plot(this.getPathArray(bar));
      }
    }
  }

  private getPathArray(bar, value = bar.value) {
    const right = (value * 206) - 4;
    const top = bar.top;
    return new SVG.PathArray([
      ['M', 0, top],
      ['L', right, top],
      ['C', right + 2, top, right + 4, top + 2, right + 4, top + 4],
      ['L', right + 4, top + 45],
      ['C', right + 4, top + 47, right + 2, top + 49, right, top + 49],
      ['L', 0, top + 49],
      ['L', 0, 0]
    ]);
  }

  private getBar(name) {
    return this.svg.select(`#${name}-path`);
  }

  private getRandomColor() {
    const idx = Math.floor(Math.random() * this.colors.length);
    return this.colors[idx];
  }

}
