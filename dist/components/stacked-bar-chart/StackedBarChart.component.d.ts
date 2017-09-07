import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class StackedBarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private stackedBarChart;
    private d3Selection;
    private colors;
    private tooltip;
    private el;
    stackedBar: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
