import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-bc-brushchart',
  templateUrl: './BrushChart.component.html'
})

export class BrushChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  private brushChart = require('britecharts/dist/umd/brush.min');
  private d3Selection = require('d3-selection');

  private el: HTMLElement;
  public brush: any;

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
        that.brushChart.exportChart(data['filename']);
      });
    }
  }

  private drawChart() {
    this.brush = this.brushChart();

    let brushContainer = this.d3Selection.select(this.el).select('.brush-chart-container'),
      containerWidth = brushContainer.node() ? brushContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      this.brush.width(containerWidth);

      for (let option in this.chartConfig['properties']) {
        if (this.brush.hasOwnProperty(option)) {
          this.brush[option](this.chartConfig['properties'][option]);
        }
      }

      brushContainer.datum(this.data).call(this.brush);

      this.ready.emit(true);
    }
  }

  public redrawChart() {
    this.d3Selection.select(this.el).selectAll('.brush-chart').remove();
    this.drawChart();
  }
}
