import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { LegendChartComponent } from '../legend-chart/LegendChart.component';

@Component({
  selector: 'ngx-bc-barchart',
  templateUrl: './BarChart.component.html'
})

export class BarChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() legendChart: LegendChartComponent;

  private d3Selection = require('d3-selection');
  private barChart = require('britecharts/dist/umd/bar.min');
  private miniTooltip = require('britecharts/dist/umd/mini-tooltip.min');
  private colors = require('britecharts/dist/umd/colors.min');

  constructor() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.redrawChart();
      });
  }

  ngOnInit() {
    this.drawChart(false);
  }

  private drawChart(redrawing: boolean) {
    var bar = this.barChart(),
      tooltip = this.miniTooltip(),
      barContainer = this.d3Selection.select('.bar-chart-container'),
      containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
      tooltipContainer;

    if (containerWidth) {
      bar.width(containerWidth);
      bar.reverseColorList(false);

      for (let option in this.chartConfig["properties"]) {
        if (bar.hasOwnProperty(option) && option != 'colorSchema') {
          bar[option](this.chartConfig["properties"][option]);
        }
      }

      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('tooltip')) {
        if (this.chartConfig['tooltip'].hasOwnProperty('show') && this.chartConfig['tooltip']['show'] === true) {
          showTooltip = true;
          if (this.chartConfig['tooltip']['useDefaultEvents'] === true) {
            bar.on('customMouseOver', tooltip.show);
            bar.on('customMouseMove', tooltip.update);
            bar.on('customMouseOut', tooltip.hide);
          } else {
            bar.on('customMouseOver', this.chartConfig['tooltip']['mouseOver']);
            bar.on('customMouseMove', this.chartConfig['tooltip']['mouseMove']);
            bar.on('customMouseOut', this.chartConfig['tooltip']['mouseOut']);
          }
        }
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            bar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          bar.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      for (let d in this.data) {
        this.data[d]["id"] = d;
        this.data[d]["quantity"] = this.data[d]["value"];
      }

      barContainer.datum(this.data).call(bar);

      if (this.legendChart && !redrawing) {
        this.legendChart.data = this.data;
        this.legendChart.chartConfig = this.chartConfig;
        this.legendChart.drawLegend();
      }

      if (this.chartConfig.hasOwnProperty('click')) {
        this.d3Selection.selectAll('.bar-chart .bar').on("click", (ev) => this.chartConfig['click'](ev));
      }

      if (showTooltip) {
        tooltipContainer = this.d3Selection.select('.bar-chart .metadata-group');
        tooltipContainer.datum([]).call(tooltip);
      }
    }
  }

  public redrawChart() {
    let container = this.d3Selection.select('.bar-chart-container');
    container.selectAll("*").remove();
    this.drawChart(true);
  }
}
