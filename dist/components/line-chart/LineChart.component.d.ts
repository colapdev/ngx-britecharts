import { OnInit, EventEmitter } from '@angular/core';
export declare class LineChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private lineChart;
    private d3Selection;
    private colors;
    private tooltip;
    line: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor();
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
