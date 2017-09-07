import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-linechart',
  templateUrl: './LineChart.component.html'
})

export class LineChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private lineChart = require('britecharts/dist/umd/line.min');
  private d3Selection = require('d3-selection');
  private colors = require('britecharts/dist/umd/colors.min');
  private tooltip = require('britecharts/dist/umd/tooltip.min');

  private el: HTMLElement;
  public line: any;
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
    this.line = this.lineChart();
    this.chartTooltip = this.tooltip();

    var lineContainer = this.d3Selection.select(this.el).select('.line-chart-container'),
      containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.line.width(containerWidth);

      for (let option in this.chartConfig["properties"]) {
        if (this.line.hasOwnProperty(option) && option != 'colorSchema') {
          this.line[option](this.chartConfig["properties"][option]);
        }
      }

      let showTooltip = false;
      if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
        showTooltip = true;
        let that = this;
        this.line.on('customMouseOver', function() {
          that.chartTooltip.show();
        });
        this.line.on('customMouseMove', function(dataPoint, topicColorMap, dataPointXPosition) {
          that.chartTooltip.update(dataPoint, topicColorMap, dataPointXPosition);
        });
        this.line.on('customMouseOut', function() {
          that.chartTooltip.hide();
        });
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.line.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.line.colorSchema(this.chartConfig['colors']['customSchema']);
        }

        if (this.chartConfig['colors'].hasOwnProperty('singleLineGradient')) {
          if (this.colors.colorGradientsHuman.hasOwnProperty(this.chartConfig['colors']['singleLineGradient'])) {
            this.line.lineGradient(this.colors.colorGradients[this.chartConfig['colors']['singleLineGradient']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customsingleLineGradient')) {
          this.line.lineGradient(this.chartConfig['colors']['customsingleLineGradient']);
        }
      }

      lineContainer.datum(this.data).call(this.line);

      if (this.chartConfig.hasOwnProperty('click')) {
        this.d3Selection.select(this.el).selectAll('.line-chart .bar').on("click", (ev) => this.chartConfig['click'](ev));
      }

      if (showTooltip) {
        for (let option in this.chartConfig["tooltip"]) {
          if (this.chartTooltip.hasOwnProperty(option)) {
            this.chartTooltip[option](this.chartConfig["tooltip"][option]);
          }
        }

        this.tooltipContainer = this.d3Selection.select(this.el).select('.line-chart-container .metadata-group .hover-marker');
        this.tooltipContainer.datum([]).call(this.chartTooltip);
      }

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    this.d3Selection.select(this.el).selectAll('.line-chart').remove();
    this.drawChart();
  }
}
