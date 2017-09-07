import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class LineChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private lineChart;
    private d3Selection;
    private colors;
    private tooltip;
    private el;
    line: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
