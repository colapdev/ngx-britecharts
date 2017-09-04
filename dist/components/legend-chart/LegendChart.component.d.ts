import { OnInit, EventEmitter } from '@angular/core';
export declare class LegendChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private d3Selection;
    private legendChart;
    private colors;
    legend: any;
    constructor();
    ngOnInit(): void;
    drawLegend(): void;
    redrawChart(): void;
}
