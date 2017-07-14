import { OnInit } from '@angular/core';
import { LegendChartComponent } from '../legend-chart/LegendChart.component';
export declare class BarChartComponent implements OnInit {
    data: any;
    chartConfig: any;
    legendChart: LegendChartComponent;
    private d3Selection;
    private barChart;
    private miniTooltip;
    private colors;
    constructor();
    ngOnInit(): void;
    private drawChart(redrawing);
    redrawChart(): void;
}
