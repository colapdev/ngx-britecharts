import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as donut from 'britecharts/dist/umd/donut.min';
import * as d3Selection from 'd3-selection';
import * as colors from 'britecharts/dist/umd/colors.min';

@Component({
  selector: 'ngx-bc-donutchart',
  templateUrl: './DonutChart.component.html'
})

export class DonutChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

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

    let that = this;
    if (this.exportAsImageEvt) {
      this.exportAsImageEvt.subscribe(data => {
        that.donut.exportChart(data['filename'], data['title']);
      });
    }
  }

  private drawChart() {
    this.donut = donut();

    let donutContainer = d3Selection.select(this.el).select('.donut-chart-container'),
      containerWidth = donutContainer.node() ? donutContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.donut.width(containerWidth);

      for (let option in this.chartConfig['properties']) {
        if (this.donut.hasOwnProperty(option) && option !== 'colorSchema') {
          this.donut[option](this.chartConfig['properties'][option]);
        }
      }

      if (this.chartConfig.hasOwnProperty('colors')) {
        if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
          if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
            this.donut.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
          }
        } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
          this.donut.colorSchema(this.chartConfig['colors']['customSchema']);
        }
      }

      donutContainer.datum(this.data).call(this.donut);

      if (this.chartConfig.hasOwnProperty('click')) {
        d3Selection.select(this.el).selectAll('.donut-chart .arc').on('click', (ev) => this.chartConfig['click'](ev));
      }

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    d3Selection.select(this.el).selectAll('.donut-chart').remove();
    this.drawChart();
  }
}
