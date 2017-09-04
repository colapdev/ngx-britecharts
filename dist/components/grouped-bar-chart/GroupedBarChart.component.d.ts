import { OnInit, EventEmitter } from '@angular/core';
export declare class GroupedBarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    ready: EventEmitter<boolean>;
    private groupedBarChart;
    private d3Selection;
    private colors;
    private tooltip;
    groupedBar: any;
    chartTooltip: any;
    tooltipContainer: any;
    constructor();
    ngOnInit(): void;
    private drawChart();
    redrawChart(): void;
}
