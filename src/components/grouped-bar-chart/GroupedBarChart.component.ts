import { Component, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-groupedbarchart',
  templateUrl: './GroupedBarChart.component.html'
})

export class GroupedBarChartComponent implements AfterViewInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private groupedBarChart = require('britecharts/dist/umd/groupedBar.min');
  private d3Selection = require('d3-selection');
  private colors = require('britecharts/dist/umd/colors.min');
  private tooltip = require('britecharts/dist/umd/tooltip.min');

  private el: HTMLElement;
  public groupedBar: any;
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

  ngAfterViewInit() {
    this.drawChart();
  }

  private drawChart() {
    this.groupedBar = this.groupedBarChart();
    this.chartTooltip = this.tooltip();

    var groupedBarContainer = this.d3Selection.select(this.el).select('.grouped-bar-chart-container'),
      containerWidth = groupedBarContainer.node() ? groupedBarContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.groupedBar.width(containerWidth);

      for (let option in this.chartConfig["properties"]) {
        if (this.groupedBar.hasOwnProperty(option) && option != 'colorSchema') {
          this.groupedBar[option](this.chartConfig["properties"][option]);
        }
      }

      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
        showTooltip = true;
        let that = this;
        this.groupedBar.on('customMouseOver', function() {
          that.chartTooltip.show();
        });
        this.groupedBar.on('customMouseMove', function(dataPoint, topicColorMap, x, y) {
          that.chartTooltip.update(dataPoint, topicColorMap, x, y);
        });
        this.groupedBar.on('customMouseOut', function() {
          that.chartTooltip.hide();
        });
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.groupedBar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.groupedBar.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      groupedBarContainer.datum(this.data).call(this.groupedBar);

      if (this.chartConfig.hasOwnProperty('click')) {
        this.d3Selection.select(this.el).selectAll('.grouped-bar .bar').on("click", (ev) => this.chartConfig['click'](ev));
      }

      if (showTooltip) {
        for (let option in this.chartConfig["tooltip"]) {
          if (this.chartTooltip.hasOwnProperty(option)) {
            this.chartTooltip[option](this.chartConfig["tooltip"][option]);
          }
        }

        this.tooltipContainer = this.d3Selection.select(this.el).select('.grouped-bar-chart-container .metadata-group');
        this.tooltipContainer.datum(this.data).call(this.chartTooltip);
      }

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    this.d3Selection.select(this.el).selectAll('.grouped-bar').remove();
    this.drawChart();
  }
}
