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
import * as legend from 'britecharts/dist/umd/legend.min';
import * as d3Selection from 'd3-selection';
import * as colors from 'britecharts/dist/umd/colors.min';
var LegendChartComponent = (function () {
    function LegendChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    LegendChartComponent.prototype.ngOnInit = function () {
        this.drawLegend();
        var that = this;
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe(function (data) {
                that.legend.exportChart(data['filename'], data['title']);
            });
        }
    };
    LegendChartComponent.prototype.drawLegend = function () {
        this.legend = legend();
        if (this.data) {
            var legendContainer = d3Selection.select(this.el).select('.legend-chart-container'), containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;
            if (containerWidth) {
                this.legend.width(containerWidth);
                for (var option in this.chartConfig['properties']) {
                    if (this.legend.hasOwnProperty(option) && option !== 'colorSchema') {
                        this.legend[option](this.chartConfig['properties'][option]);
                    }
                }
                if (this.chartConfig.hasOwnProperty('colors')) {
                    if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                        if (colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                            this.legend.colorSchema(colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                        }
                    }
                    else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                        this.legend.colorSchema(this.chartConfig['colors']['customSchema']);
                    }
                }
                legendContainer.datum(this.data).call(this.legend);
                this.ready.emit(true);
            }
        }
    };
    LegendChartComponent.prototype.redrawChart = function () {
        d3Selection.select(this.el).selectAll('.britechart-legend').remove();
        this.drawLegend();
    };
    return LegendChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", Observable)
], LegendChartComponent.prototype, "exportAsImageEvt", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], LegendChartComponent.prototype, "ready", void 0);
LegendChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-legendchart',
        template: "<div class=\"legend-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], LegendChartComponent);
export { LegendChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/legend-chart/LegendChart.component.js.map