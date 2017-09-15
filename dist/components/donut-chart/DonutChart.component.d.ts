import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class DonutChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private donutChart;
    private d3Selection;
    private colors;
    private el;
    donut: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
