import { Component } from '@angular/core';

@Component({
  selector: 'svg-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent {

  bars = {
    financial: 0.6,
    intellectual: 1.2,
    physical: 1.8,
    relational: 2.4,
    spiritual: 2.7
  };

  public barPath(name, top, sectionWidth) {
    const val = this.bars[name];
    const right = ((val * sectionWidth) + 82) - 4;
    return [
      `M82,${top}`,
      `L${right},${top}`,
      `C${right + 2},${top}`,
      `${right + 4},${top + 2}`,
      `${right + 4},${top + 4}`,
      `L${right + 4},${top + 45}`,
      `C${right + 4},${top + 47}`,
      `${right + 2},${top + 49}`,
      `${right},${top + 49}`,
      `L82,${top + 49}`,
      `L82,0`,
      `Z`
    ].join(' ');
  }

}
