import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class LegendChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
    ready: EventEmitter<boolean>;
    private el;
    legend: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    drawLegend(): void;
    redrawChart(): void;
}
