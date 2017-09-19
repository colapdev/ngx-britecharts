import { AfterViewInit, EventEmitter, ElementRef } from '@angular/core';
export declare class GroupedBarChartComponent implements AfterViewInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private groupedBarChart;
    private d3Selection;
    private colors;
    private tooltip;
    private el;
    groupedBar: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    private drawChart();
    redrawChart(): void;
}
