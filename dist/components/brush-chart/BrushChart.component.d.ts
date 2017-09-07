import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class BrushChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private brushChart;
    private d3Selection;
    private el;
    brush: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
