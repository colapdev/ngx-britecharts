import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as legend from 'britecharts/dist/umd/legend.min';
import * as d3Selection from 'd3-selection';
import * as colors from 'britecharts/dist/umd/colors.min';

@Component({
  selector: 'ngx-bc-legendchart',
  templateUrl: './LegendChart.component.html'
})

export class LegendChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private el: HTMLElement;
  public legend: any;

  constructor(elementRef: ElementRef) {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.redrawChart();
      });
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.drawLegend();

    let that = this;
    if (this.exportAsImageEvt) {
      this.exportAsImageEvt.subscribe(data => {
        that.legend.exportChart(data['filename'], data['title']);
      });
    }
  }

  public drawLegend() {
    this.legend = legend();

    if (this.data) {
      let legendContainer = d3Selection.select(this.el).select('.legend-chart-container'),
        containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

      if (containerWidth) {
        this.legend.width(containerWidth);

        for (let option in this.chartConfig['properties']) {
          if (this.legend.hasOwnProperty(option) && option !== 'colorSchema') {
            this.legend[option](this.chartConfig['properties'][option]);
          }
        }

        if (this.chartConfig.hasOwnProperty('colors')) {
          if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
            if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
              this.legend.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
            }
          } else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
            this.legend.colorSchema(this.chartConfig['colors']['customSchema']);
          }
        }

        legendContainer.datum(this.data).call(this.legend);

        this.ready.emit(true);
      }
    }
  }

  public redrawChart() {
    d3Selection.select(this.el).selectAll('.britechart-legend').remove();
    this.drawLegend();
  }
}
