import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class DonutChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
    ready: EventEmitter<boolean>;
    private el;
    donut: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
