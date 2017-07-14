import { OnInit } from '@angular/core';
export declare class LegendChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    private d3Selection;
    private legendChart;
    private colors;
    constructor();
    ngOnInit(): void;
    drawLegend(): void;
    redrawChart(): void;
}
