import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as bar from 'britecharts/dist/umd/bar.min';
import * as d3Selection from 'd3-selection';
import * as miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import * as colors from 'britecharts/dist/umd/colors.min';

@Component({
  selector: 'ngx-bc-barchart',
  templateUrl: './BarChart.component.html'
})

export class BarChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private el: HTMLElement;
  public bar: any;
  public tooltip: any;
  public tooltipContainer: any;

  constructor(elementRef: ElementRef) {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.redrawChart();
      });
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.drawChart();

    let that = this;
    if (this.exportAsImageEvt) {
      this.exportAsImageEvt.subscribe(data => {
        that.bar.exportChart(data['filename'], data['title']);
      });
    }
  }

  private drawChart() {
    this.bar = bar();
    this.tooltip = miniTooltip();

    let barContainer = d3Selection.select(this.el).select('.bar-chart-container'),
      containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.bar.width(containerWidth);
      this.bar.shouldReverseColorList(false);

      for (let option in this.chartConfig['properties']) {
        if (this.bar.hasOwnProperty(option) && option !== 'colorSchema') {
          this.bar[option](this.chartConfig['properties'][option]);
        }
      }

      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
        showTooltip = true;
        this.bar.on('customMouseOver', this.tooltip.show);
        this.bar.on('customMouseMove', this.tooltip.update);
        this.bar.on('customMouseOut', this.tooltip.hide);
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.bar.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.bar.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      barContainer.datum(this.data).call(this.bar);

      if (this.chartConfig.hasOwnProperty('click')) {
        d3Selection.select(this.el).selectAll('.bar-chart .bar').on('click', (ev) => this.chartConfig['click'](ev));
      }

      this.tooltipContainer = d3Selection.select(this.el).select('.bar-chart-container .metadata-group');
      this.tooltipContainer.datum(this.data).call(this.tooltip);

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    d3Selection.select(this.el).selectAll('.bar-chart').remove();
    this.drawChart();
  }
}
