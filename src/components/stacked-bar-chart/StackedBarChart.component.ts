import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-stackedbarchart',
  templateUrl: './StackedBarChart.component.html'
})

export class StackedBarChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private stackedBarChart = require('britecharts/dist/umd/stackedBar.min');
  private d3Selection = require('d3-selection');
  private colors = require('britecharts/dist/umd/colors.min');
  private tooltip = require('britecharts/dist/umd/tooltip.min');

  private el: HTMLElement;
  public stackedBar: any;
  public chartTooltip: any;
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
  }

  private drawChart() {
    this.stackedBar = this.stackedBarChart();
    this.chartTooltip = this.tooltip();

    var stackedBarContainer = this.d3Selection.select(this.el).select('.stacked-bar-chart-container'),
      containerWidth = stackedBarContainer.node() ? stackedBarContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.stackedBar.width(containerWidth);

      for (let option in this.chartConfig["properties"]) {
        if (this.stackedBar.hasOwnProperty(option) && option != 'colorSchema') {
          this.stackedBar[option](this.chartConfig["properties"][option]);
        }
      }

      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
        showTooltip = true;
        let that = this;
        this.stackedBar.on('customMouseOver', function() {
          that.chartTooltip.show();
        });
        this.stackedBar.on('customMouseMove', function(dataPoint, topicColorMap, x, y) {
          that.chartTooltip.update(dataPoint, topicColorMap, x, y);
        });
        this.stackedBar.on('customMouseOut', function() {
          that.chartTooltip.hide();
        });
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.stackedBar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.stackedBar.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      stackedBarContainer.datum(this.data).call(this.stackedBar);

      if (this.chartConfig.hasOwnProperty('click')) {
        this.d3Selection.select(this.el).selectAll('.stacked-bar .bar').on("click", (ev) => this.chartConfig['click'](ev));
      }

      if (showTooltip) {
        for (let option in this.chartConfig["tooltip"]) {
          if (this.chartTooltip.hasOwnProperty(option)) {
            this.chartTooltip[option](this.chartConfig["tooltip"][option]);
          }
        }

        this.tooltipContainer = this.d3Selection.select(this.el).select('.stacked-bar-chart-container .metadata-group');
        this.tooltipContainer.datum(this.data).call(this.chartTooltip);
      }

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    this.d3Selection.select(this.el).selectAll('.stacked-bar').remove();
    this.drawChart();
  }
}
