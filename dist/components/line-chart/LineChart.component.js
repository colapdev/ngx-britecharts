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
import * as lineChart from 'britecharts/dist/umd/line.min';
import * as d3Selection from 'd3-selection';
import * as tooltip from 'britecharts/dist/umd/tooltip.min';
import * as colors from 'britecharts/dist/umd/colors.min';
var LineChartComponent = (function () {
    function LineChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
        var that = this;
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe(function (data) {
                that.line.exportChart(data['filename'], data['title']);
            });
        }
    };
    LineChartComponent.prototype.drawChart = function () {
        var that = this;
        this.line = lineChart();
        this.chartTooltip = tooltip();
        var lineContainer = d3Selection.select(this.el).select('.line-chart-container'), containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.line.width(containerWidth);
            for (var option in this.chartConfig['properties']) {
                if (this.line.hasOwnProperty(option) && option !== 'colorSchema') {
                    this.line[option](this.chartConfig['properties'][option]);
                }
            }
            var showTooltip = false;
            if (this.chartConfig.hasOwnProperty('showTooltip') && this.chartConfig['showTooltip'] === true) {
                showTooltip = true;
                this.line.on('customMouseOver', function () {
                    that.chartTooltip.show();
                });
                this.line.on('customMouseMove', function (dataPoint, topicColorMap, dataPointXPosition) {
                    that.chartTooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                });
                this.line.on('customMouseOut', function () {
                    that.chartTooltip.hide();
                });
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        this.line.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.line.colorSchema(this.chartConfig['colors']['customSchema']);
                }
                if (this.chartConfig['colors'].hasOwnProperty('singleLineGradient')) {
                    if (colors.colorGradientsHuman.hasOwnProperty(this.chartConfig['colors']['singleLineGradient'])) {
                        this.line.lineGradient(colors.colorGradients[this.chartConfig['colors']['singleLineGradient']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customsingleLineGradient')) {
                    this.line.lineGradient(this.chartConfig['colors']['customsingleLineGradient']);
                }
            }
            lineContainer.datum(this.data).call(this.line);
            if (this.chartConfig.hasOwnProperty('click')) {
                this.line.on('customDataEntryClick', function (e, d, m) {
                    that.chartConfig['click'](e, d, m);
                });
            }
            if (showTooltip) {
                for (var option in this.chartConfig['tooltip']) {
                    if (this.chartTooltip.hasOwnProperty(option)) {
                        this.chartTooltip[option](this.chartConfig['tooltip'][option]);
                    }
                }
                this.tooltipContainer = d3Selection.select(this.el).select('.line-chart-container .metadata-group .hover-marker');
                this.tooltipContainer.datum([]).call(this.chartTooltip);
            }
            this.ready.emit(true);
        }
    };
    LineChartComponent.prototype.redrawChart = function () {
        d3Selection.select(this.el).selectAll('.line-chart').remove();
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
    Input(),
    __metadata("design:type", Observable)
], LineChartComponent.prototype, "exportAsImageEvt", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LineChartComponent.prototype, "ready", void 0);
LineChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-linechart',
        template: "<div class=\"line-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], LineChartComponent);
export { LineChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/line-chart/LineChart.component.js.map