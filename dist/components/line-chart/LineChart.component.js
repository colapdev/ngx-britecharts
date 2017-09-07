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
var LineChartComponent = (function () {
    function LineChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        this.lineChart = require('britecharts/dist/umd/line.min');
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
    LineChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    LineChartComponent.prototype.drawChart = function () {
        var _this = this;
        this.line = this.lineChart();
        this.chartTooltip = this.tooltip();
        var lineContainer = this.d3Selection.select(this.el).select('.line-chart-container'), containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.line.width(containerWidth);
            for (var option in this.chartConfig["properties"]) {
                if (this.line.hasOwnProperty(option) && option != 'colorSchema') {
                    this.line[option](this.chartConfig["properties"][option]);
                }
            }
            var showTooltip = false;
            if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
                showTooltip = true;
                var that_1 = this;
                this.line.on('customMouseOver', function () {
                    that_1.chartTooltip.show();
                });
                this.line.on('customMouseMove', function (dataPoint, topicColorMap, dataPointXPosition) {
                    that_1.chartTooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                });
                this.line.on('customMouseOut', function () {
                    that_1.chartTooltip.hide();
                });
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        this.line.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.line.colorSchema(this.chartConfig['colors']['customSchema']);
                }
                if (this.chartConfig['colors'].hasOwnProperty('singleLineGradient')) {
                    if (this.colors.colorGradientsHuman.hasOwnProperty(this.chartConfig['colors']['singleLineGradient'])) {
                        this.line.lineGradient(this.colors.colorGradients[this.chartConfig['colors']['singleLineGradient']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customsingleLineGradient')) {
                    this.line.lineGradient(this.chartConfig['colors']['customsingleLineGradient']);
                }
            }
            lineContainer.datum(this.data).call(this.line);
            if (this.chartConfig.hasOwnProperty('click')) {
                this.d3Selection.select(this.el).selectAll('.line-chart .bar').on("click", function (ev) { return _this.chartConfig['click'](ev); });
            }
            if (showTooltip) {
                for (var option in this.chartConfig["tooltip"]) {
                    if (this.chartTooltip.hasOwnProperty(option)) {
                        this.chartTooltip[option](this.chartConfig["tooltip"][option]);
                    }
                }
                this.tooltipContainer = this.d3Selection.select(this.el).select('.line-chart-container .metadata-group .hover-marker');
                this.tooltipContainer.datum([]).call(this.chartTooltip);
            }
            this.ready.emit(true);
        }
    };
    LineChartComponent.prototype.redrawChart = function () {
        this.d3Selection.select(this.el).selectAll('.line-chart').remove();
        this.drawChart();
    };
    return LineChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LineChartComponent.prototype, "ready", void 0);
LineChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-linechart',
        template: "<div [attr.id]=\"compId\" class=\"line-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], LineChartComponent);
export { LineChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/line-chart/LineChart.component.js.map