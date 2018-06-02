import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class StackedBarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
    ready: EventEmitter<boolean>;
    private el;
    stackedBar: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
