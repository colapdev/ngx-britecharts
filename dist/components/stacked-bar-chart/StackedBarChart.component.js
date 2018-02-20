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
var StackedBarChartComponent = (function () {
    function StackedBarChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        this.stackedBarChart = require('britecharts/dist/umd/stackedBar.min');
        this.d3Selection = require('d3-selection');
        this.colors = require('britecharts/dist/umd/colors.min');
        this.tooltip = require('britecharts/dist/umd/tooltip.min');
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    StackedBarChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
        var that = this;
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe(function (data) {
                that.stackedBarChart.exportChart(data['filename']);
            });
        }
    };
    StackedBarChartComponent.prototype.drawChart = function () {
        var _this = this;
        this.stackedBar = this.stackedBarChart();
        this.chartTooltip = this.tooltip();
        var stackedBarContainer = this.d3Selection.select(this.el).select('.stacked-bar-chart-container'), containerWidth = stackedBarContainer.node() ? stackedBarContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.stackedBar.width(containerWidth);
            for (var option in this.chartConfig['properties']) {
                if (this.stackedBar.hasOwnProperty(option) && option !== 'colorSchema') {
                    this.stackedBar[option](this.chartConfig['properties'][option]);
                }
            }
            var showTooltip = false;
            if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
                showTooltip = true;
                var that_1 = this;
                this.stackedBar.on('customMouseOver', function () {
                    that_1.chartTooltip.show();
                });
                this.stackedBar.on('customMouseMove', function (dataPoint, topicColorMap, x, y) {
                    that_1.chartTooltip.update(dataPoint, topicColorMap, x, y);
                });
                this.stackedBar.on('customMouseOut', function () {
                    that_1.chartTooltip.hide();
                });
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        this.stackedBar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.stackedBar.colorSchema(this.chartConfig['colors']['customSchema']);
                }
            }
            stackedBarContainer.datum(this.data).call(this.stackedBar);
            if (this.chartConfig.hasOwnProperty('click')) {
                this.d3Selection.select(this.el).selectAll('.stacked-bar .bar').on('click', function (ev) { return _this.chartConfig['click'](ev); });
            }
            if (showTooltip) {
                for (var option in this.chartConfig['tooltip']) {
                    if (this.chartTooltip.hasOwnProperty(option)) {
                        this.chartTooltip[option](this.chartConfig['tooltip'][option]);
                    }
                }
                this.tooltipContainer = this.d3Selection.select(this.el).select('.stacked-bar-chart-container .metadata-group');
                this.tooltipContainer.datum(this.data).call(this.chartTooltip);
            }
            this.ready.emit(true);
        }
    };
    StackedBarChartComponent.prototype.redrawChart = function () {
        this.d3Selection.select(this.el).selectAll('.stacked-bar').remove();
        this.drawChart();
    };
    return StackedBarChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackedBarChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackedBarChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", Observable)
], StackedBarChartComponent.prototype, "exportAsImageEvt", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], StackedBarChartComponent.prototype, "ready", void 0);
StackedBarChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-stackedbarchart',
        template: "<div class=\"stacked-bar-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], StackedBarChartComponent);
export { StackedBarChartComponent };
//# sourceMappingURL=/home/martin/Escritorio/ngx publish/ngx-britecharts/src/components/stacked-bar-chart/StackedBarChart.component.js.map