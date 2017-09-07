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
var GroupedBarChartComponent = (function () {
    function GroupedBarChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        this.groupedBarChart = require('britecharts/dist/umd/groupedBar.min');
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
    GroupedBarChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    GroupedBarChartComponent.prototype.drawChart = function () {
        var _this = this;
        this.groupedBar = this.groupedBarChart();
        this.chartTooltip = this.tooltip();
        var groupedBarContainer = this.d3Selection.select(this.el).select('.grouped-bar-chart-container'), containerWidth = groupedBarContainer.node() ? groupedBarContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.groupedBar.width(containerWidth);
            for (var option in this.chartConfig["properties"]) {
                if (this.groupedBar.hasOwnProperty(option) && option != 'colorSchema') {
                    this.groupedBar[option](this.chartConfig["properties"][option]);
                }
            }
            var showTooltip = false;
            if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
                showTooltip = true;
                var that_1 = this;
                this.groupedBar.on('customMouseOver', function () {
                    that_1.chartTooltip.show();
                });
                this.groupedBar.on('customMouseMove', function (dataPoint, topicColorMap, x, y) {
                    that_1.chartTooltip.update(dataPoint, topicColorMap, x, y);
                });
                this.groupedBar.on('customMouseOut', function () {
                    that_1.chartTooltip.hide();
                });
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        this.groupedBar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.groupedBar.colorSchema(this.chartConfig['colors']['customSchema']);
                }
            }
            groupedBarContainer.datum(this.data).call(this.groupedBar);
            if (this.chartConfig.hasOwnProperty('click')) {
                this.d3Selection.select(this.el).selectAll('.grouped-bar .bar').on("click", function (ev) { return _this.chartConfig['click'](ev); });
            }
            if (showTooltip) {
                for (var option in this.chartConfig["tooltip"]) {
                    if (this.chartTooltip.hasOwnProperty(option)) {
                        this.chartTooltip[option](this.chartConfig["tooltip"][option]);
                    }
                }
                this.tooltipContainer = this.d3Selection.select(this.el).select('.grouped-bar-chart-container .metadata-group');
                this.tooltipContainer.datum(this.data).call(this.chartTooltip);
            }
            this.ready.emit(true);
        }
    };
    GroupedBarChartComponent.prototype.redrawChart = function () {
        this.d3Selection.select(this.el).selectAll('.grouped-bar').remove();
        this.drawChart();
    };
    return GroupedBarChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], GroupedBarChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GroupedBarChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GroupedBarChartComponent.prototype, "ready", void 0);
GroupedBarChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-groupedbarchart',
        template: "<div class=\"grouped-bar-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], GroupedBarChartComponent);
export { GroupedBarChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/grouped-bar-chart/GroupedBarChart.component.js.map