import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-legendchart',
  templateUrl: './LegendChart.component.html'
})

export class LegendChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;

  private d3Selection = require('d3-selection');
  private legendChart = require('britecharts/dist/umd/legend.min');
  private colors = require('britecharts/dist/umd/colors.min');

  constructor() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.redrawChart();
      });
  }

  ngOnInit() {
    this.drawLegend();
  }

  public drawLegend() {
    if (this.data) {
      var legendChart = this.legendChart(),
        legendContainer = this.d3Selection.select('.legend-chart-container'),
        containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

      if (containerWidth) {
        legendChart.width(containerWidth);

        for (let option in this.chartConfig["properties"]) {
          if (legendChart.hasOwnProperty(option) && option != 'colorSchema') {
            legendChart[option](this.chartConfig["properties"][option]);
          }
        }

        if (this.chartConfig.hasOwnProperty('colors')) {
          if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
            if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
              legendChart.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
            }
          } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
            legendChart.colorSchema(this.chartConfig['colors']['customSchema']);
          }
        }

        legendContainer.datum(this.data).call(legendChart);
      }
    }
  }

  public redrawChart() {
    let container = this.d3Selection.select('.legend-chart-container');
    container.selectAll("*").remove();
    this.drawLegend();
  }
}
