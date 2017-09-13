import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class BarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private barChart;
    private d3Selection;
    private miniTooltip;
    private colors;
    private el;
    bar: any;
    tooltip: any;
    tooltipContainer: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
