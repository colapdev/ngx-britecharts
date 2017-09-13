import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class LegendChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private d3Selection;
    private legendChart;
    private colors;
    private el;
    legend: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    drawLegend(): void;
    redrawChart(): void;
}
