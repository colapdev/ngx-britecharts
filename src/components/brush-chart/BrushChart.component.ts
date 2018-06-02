import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as brush from 'britecharts/dist/umd/brush.min';
import * as d3Selection from 'd3-selection';

@Component({
  selector: 'ngx-bc-brushchart',
  templateUrl: './BrushChart.component.html'
})

export class BrushChartComponent implements OnInit {
  @Input() data: any;
  @Input() chartConfig: any;
  @Input() exportAsImageEvt: Observable<any>;

  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

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
        that.brush.exportChart(data['filename'], data['title']);
      });
    }
  }

  private drawChart() {
    this.brush = brush();

    let brushContainer = d3Selection.select(this.el).select('.brush-chart-container'),
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
    d3Selection.select(this.el).selectAll('.brush-chart').remove();
    this.drawChart();
  }
}
