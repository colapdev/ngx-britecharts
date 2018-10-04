var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as d3Selection from 'd3-selection';
import * as bar from 'britecharts/dist/umd/bar.min';
import * as brush from 'britecharts/dist/umd/brush.min';
import * as bullet from 'britecharts/dist/umd/bullet.min';
import * as colors from 'britecharts/dist/umd/colors.min';
import * as donut from 'britecharts/dist/umd/donut.min';
import * as groupedBar from 'britecharts/dist/umd/groupedBar.min';
import * as heatmap from 'britecharts/dist/umd/heatmap.min';
import * as legend from 'britecharts/dist/umd/legend.min';
import * as line from 'britecharts/dist/umd/line.min';
import * as miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import * as scatterPlot from 'britecharts/dist/umd/scatterPlot.min';
import * as sparkline from 'britecharts/dist/umd/sparkline.min';
import * as stackedArea from 'britecharts/dist/umd/stackedArea.min';
import * as stackedBar from 'britecharts/dist/umd/stackedBar.min';
import * as step from 'britecharts/dist/umd/step.min';
import * as tooltip from 'britecharts/dist/umd/tooltip.min';
import { ChartType } from './Chart.types';
var ChartComponent = (function () {
    function ChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var that = this;
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe(function (data) {
                that.chart.exportChart(data['filename'], data['title']);
            });
        }
        if (this.data && this.chartConfig && this.chartType) {
            this.redrawChart();
        }
    };
    ChartComponent.prototype.setChartType = function (chartType) {
        this.chartType = chartType;
    };
    ChartComponent.prototype.initializeChart = function () {
        switch (this.chartType) {
            case ChartType.Bar:
                this.chart = bar();
                this.chartSelector = '.bar-chart';
                this.chartClickSelector = '.bar-chart .bar';
                this.tooltipContainerSelector = '.bar-chart .metadata-group';
                break;
            case ChartType.Brush:
                this.chart = brush();
                this.chartSelector = '.brush-chart';
                this.chartClickSelector = ''; // No click selector.
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Bullet:
                this.chart = bullet();
                this.chartSelector = '.bullet-chart';
                this.chartClickSelector = '.bullet-chart .range, .bullet-chart .measure, .bullet-chart .marker-line';
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Donut:
                this.chart = donut();
                this.chartSelector = '.donut-chart';
                this.chartClickSelector = '.donut-chart .arc';
                this.tooltipContainerSelector = ''; // No tooltip selector.
                break;
            case ChartType.GroupedBar:
                this.chart = groupedBar();
                this.chartSelector = '.grouped-bar';
                this.chartClickSelector = '.grouped-bar .bar';
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Heatmap:
                this.chart = heatmap();
                this.chartSelector = '.heatmap';
                this.chartClickSelector = '.heatmap .box';
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Legend:
                this.chart = legend();
                this.chartSelector = '.britechart-legend';
                this.chartClickSelector = '.legend-entry';
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Line:
                this.chart = line();
                this.chartSelector = '.line-chart';
                this.chartClickSelector = ''; // No click selector.
                this.tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
                break;
            case ChartType.ScatterPlot:
                this.chart = scatterPlot();
                this.chartSelector = '.scatter-plot';
                this.chartClickSelector = ''; // No click selector.
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Sparkline:
                this.chart = sparkline();
                this.chartSelector = '.sparkline';
                this.chartClickSelector = ''; // No click selector.
                this.tooltipContainerSelector = '';
                break;
            case ChartType.StackedArea:
                this.chart = stackedArea();
                this.chartSelector = '.stacked-area';
                this.chartClickSelector = ''; // No click selector.
                this.tooltipContainerSelector = '.stacked-area .metadata-group .vertical-marker-container';
                break;
            case ChartType.StackedBar:
                this.chart = stackedBar();
                this.chartSelector = '.stacked-bar';
                this.chartClickSelector = '.stacked-bar .bar';
                this.tooltipContainerSelector = '';
                break;
            case ChartType.Step:
                this.chart = step();
                this.chartSelector = '.step-chart';
                this.chartClickSelector = '.step-chart .step';
                this.tooltipContainerSelector = '.step-chart .metadata-group';
                break;
        }
    };
    ChartComponent.prototype.isDictionary = function (obj) {
        if (!obj) {
            return false;
        }
        if (Array.isArray(obj)) {
            return false;
        }
        if (obj.constructor !== Object) {
            return false;
        }
        return true;
    };
    ChartComponent.prototype.drawChart = function () {
        var _this = this;
        var that = this;
        this.initializeChart();
        var chartContainer = d3Selection.select(this.el).select('.chart-container'), containerWidth = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            // Set the container width to a standar value. If width is passed in the properties it is going to be
            // overriden later.
            this.chart.width(containerWidth);
            if (this.chart.hasOwnProperty('shouldReverseColorList')) {
                this.chart.shouldReverseColorList(false);
            }
            for (var option in this.chartConfig['properties']) {
                if (this.chart.hasOwnProperty(option) && !this.isDictionary(option)) {
                    this.chart[option](this.chartConfig['properties'][option]);
                }
            }
            // If the size of some property must be set relative to the container width it must be sent in an
            // object name 'sizeRelativeToContainerWidth' containing the property to set as key and the ratio to the
            // container's width as value.
            if (this.chartConfig.hasOwnProperty('sizeRelativeToContainerWidth')) {
                for (var option in this.chartConfig['sizeRelativeToContainerWidth']) {
                    if (this.chart.hasOwnProperty(option)) {
                        this.chart[option](containerWidth / this.chartConfig['sizeRelativeToContainerWidth'][option]);
                    }
                }
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        if (this.chartConfig['colors'].hasOwnProperty('reverse') && this.chartConfig['colors']['reverse'] === true) {
                            this.chart.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']].reverse());
                        }
                        else {
                            this.chart.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                        }
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.chart.colorSchema(this.chartConfig['colors']['customSchema']);
                }
            }
            chartContainer.datum(this.data).call(this.chart);
            if (this.chartConfig.hasOwnProperty('click')) {
                if (this.chartType === ChartType.Line || this.chartType === ChartType.StackedArea) {
                    this.chart.on('customDataEntryClick', function (e, d, m) {
                        that.chartConfig['click'](e, d, m);
                    });
                }
                else if (this.chartType === ChartType.ScatterPlot) {
                    this.chart.on('customClick', function (e, d, m, s) {
                        that.chartConfig['click'](e, d, m, s);
                    });
                }
                else {
                    d3Selection.select(this.el).selectAll(this.chartClickSelector).on('click', function (ev) { return _this.chartConfig['click'](ev); });
                }
            }
            if (this.chartConfig.hasOwnProperty('tooltip')) {
                if ([ChartType.Bar, ChartType.Step].indexOf(this.chartType) > -1) {
                    this.tooltip = miniTooltip();
                    this.chart.on('customMouseOver', this.tooltip.show);
                    this.chart.on('customMouseMove', this.tooltip.update);
                    this.chart.on('customMouseOut', this.tooltip.hide);
                    this.tooltipContainer = d3Selection.select(this.el).select(this.tooltipContainerSelector);
                    this.tooltipContainer.datum(this.data).call(this.tooltip);
                }
                else if ([ChartType.Line, ChartType.StackedArea].indexOf(this.chartType) > -1) {
                    this.tooltip = tooltip();
                    this.chart.on('customMouseOver', function () {
                        that.tooltip.show();
                    });
                    this.chart.on('customMouseMove', function (dataPoint, topicColorMap, dataPointXPosition) {
                        that.tooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                    });
                    this.chart.on('customMouseOut', function () {
                        that.tooltip.hide();
                    });
                    for (var option in this.chartConfig['tooltip']) {
                        if (this.tooltip.hasOwnProperty(option)) {
                            this.tooltip[option](this.chartConfig['tooltip'][option]);
                        }
                    }
                    this.tooltipContainer = d3Selection.select(this.el).select(this.tooltipContainerSelector);
                    this.tooltipContainer.datum([]).call(this.tooltip);
                }
            }
            this.ready.emit(true);
        }
    };
    ChartComponent.prototype.redrawChart = function () {
        d3Selection.select(this.el).selectAll(this.chartSelector).remove();
        this.drawChart();
    };
    return ChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", Observable)
], ChartComponent.prototype, "exportAsImageEvt", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ChartComponent.prototype, "chartType", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponent.prototype, "ready", void 0);
ChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-chart',
        template: "<div class=\"chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/chart/Chart.component.js.map