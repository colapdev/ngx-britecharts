import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ChartType } from './Chart.types';
export declare class ChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
    ready: EventEmitter<boolean>;
    private el;
    chart: any;
    chartType: ChartType;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    setChartType(chartType: ChartType): void;
    private initializeChart();
    private isDictionary(obj);
    drawChart(): void;
    redrawChart(): void;
}
