import { OnInit, EventEmitter } from '@angular/core';
export declare class BarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private barChart;
    private d3Selection;
    private miniTooltip;
    private colors;
    bar: any;
    tooltip: any;
    tooltipContainer: any;
    constructor();
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
