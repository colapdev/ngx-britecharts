import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as d3Selection from 'd3-selection';
import * as bar from 'britecharts/dist/umd/bar.min';
import * as brush from 'britecharts/dist/umd/brush.min';
import * as bullet from 'britecharts/dist/umd/bullet.min';
import * as colors from 'britecharts/dist/umd/colors.min';
import * as donut from 'britecharts/dist/umd/donut.min';
import * as groupedBar from 'britecharts/dist/umd/groupedBar.min';
import * as heatmap from 'britecharts/dist/umd/heatmap.min';
import * as legend from 'britecharts/dist/umd/legend.min';
import * as line from 'britecharts/dist/umd/line.min';
import * as loading from 'britecharts/dist/umd/loading.min';
import * as miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import * as scatterPlot from 'britecharts/dist/umd/scatterPlot.min';
import * as sparkline from 'britecharts/dist/umd/sparkline.min';
import * as stackedArea from 'britecharts/dist/umd/stackedArea.min';
import * as stackedBar from 'britecharts/dist/umd/stackedBar.min';
import * as step from 'britecharts/dist/umd/step.min';
import * as tooltip from 'britecharts/dist/umd/tooltip.min';
import { ChartType } from './Chart.types';

@Component({
  selector: 'ngx-bc-chart',
  templateUrl: './Chart.component.html'
})

export class ChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private el: HTMLElement;
  public chart: any;
  public chartType: ChartType;
  // public tooltip: any;
  // public tooltipContainer: any;

  constructor(elementRef: ElementRef) {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        // this.redrawChart();
      });
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    let that = this;
    if (this.exportAsImageEvt) {
      this.exportAsImageEvt.subscribe(data => {
        that.chart.exportChart(data['filename'], data['title']);
      });
    }
  }

  public setChartType(chartType: ChartType) {
    this.chartType = chartType;
  }

  private initializeChart() {
    switch (this.chartType) {
      case ChartType.Bar:
        this.chart = bar();
        break;
      case ChartType.Brush:
        this.chart = brush();
        break;
      case ChartType.Bullet:
        this.chart = bullet();
        break;
      case ChartType.Donut:
        this.chart = donut();
        break;
      case ChartType.GroupedBar:
        this.chart = groupedBar();
        break;
      case ChartType.Heatmap:
        this.chart = heatmap();
        break;
      case ChartType.Legend:
        this.chart = legend();
        break;
      case ChartType.Line:
        this.chart = line();
        break;
      case ChartType.ScatterPlot:
        this.chart = scatterPlot();
        break;
      case ChartType.Sparkline:
        this.chart = sparkline();
        break;
      case ChartType.StackedArea:
        this.chart = stackedArea();
        break;
      case ChartType.StackedBar:
        this.chart = stackedBar();
        break;
      case ChartType.Step:
        this.chart = step();
        break;
    }
  }

  private isDictionary(obj) {
    if (!obj) {
      return false;
    }
    if (Array.isArray(obj)) {
      return false;
    }
    if (obj.constructor !== Object) {
      return false;
    }
    return true;
  }


  public drawChart() {
    this.initializeChart();
    // this.tooltip = miniTooltip();

    let chartContainer = d3Selection.select(this.el).select('.chart-container'),
      containerWidth = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      // Set the container width to a standar value. If width is passed in the properties it is going to be
      // overriden later.
      this.chart.width(containerWidth);

      if (this.chart.hasOwnProperty('shouldReverseColorList')) {
        this.chart.shouldReverseColorList(false);
      }

      for (let option in this.chartConfig['properties']) {
        if (this.chart.hasOwnProperty(option) && !this.isDictionary(option)) {
          this.chart[option](this.chartConfig['properties'][option]);
        }
      }

      /*
      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
        showTooltip = true;
        this.bar.on('customMouseOver', this.tooltip.show);
        this.bar.on('customMouseMove', this.tooltip.update);
        this.bar.on('customMouseOut', this.tooltip.hide);
      }
      */
      /*
       if (this.chartConfig.hasOwnProperty('colors')) {
         if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
           if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
             this.bar.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
           }
         } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
           this.bar.colorSchema(this.chartConfig['colors']['customSchema']);
         }
       }
       */
      chartContainer.datum(this.data).call(this.chart);

      /*
      if (this.chartConfig.hasOwnProperty('click')) {
        d3Selection.select(this.el).selectAll('.bar-chart .bar').on('click', (ev) => this.chartConfig['click'](ev));
      }
      */
      /*
      this.tooltipContainer = d3Selection.select(this.el).select('.bar-chart-container .metadata-group');
      this.tooltipContainer.datum(this.data).call(this.tooltip);
      */
      this.ready.emit(true);
    }
  }

  public redrawChart() {
    // d3Selection.select(this.el).selectAll('.bar-chart').remove();
    // this.drawChart();
  }
}
