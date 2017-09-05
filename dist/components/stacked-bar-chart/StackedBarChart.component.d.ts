import { OnInit, EventEmitter } from '@angular/core';
export declare class StackedBarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private stackedBarChart;
    private d3Selection;
    private colors;
    private tooltip;
    stackedBar: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor();
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
