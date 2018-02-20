import { AfterViewInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class GroupedBarChartComponent implements AfterViewInit {
    data: any;
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
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
