import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-donutchart',
  templateUrl: './DonutChart.component.html'
})

export class DonutChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private donutChart = require('britecharts/dist/umd/donut.min');
  private d3Selection = require('d3-selection');
  private colors = require('britecharts/dist/umd/colors.min');

  private el: HTMLElement;
  public donut: any;

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
    this.donut = this.donutChart();

    var donutContainer = this.d3Selection.select(this.el).select('.donut-chart-container'),
      containerWidth = donutContainer.node() ? donutContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.donut.width(containerWidth);

      for (let option in this.chartConfig["properties"]) {
        if (this.donut.hasOwnProperty(option) && option != 'colorSchema') {
          this.donut[option](this.chartConfig["properties"][option]);
        }
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.donut.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.donut.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      donutContainer.datum(this.data).call(this.donut);

      if (this.chartConfig.hasOwnProperty('click')) {
        this.d3Selection.select(this.el).selectAll('.donut-chart .arc').on("click", (ev) => this.chartConfig['click'](ev));
      }

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    this.d3Selection.select(this.el).selectAll('.donut-chart').remove();
    this.drawChart();
  }
}
