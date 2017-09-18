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
var DonutChartComponent = (function () {
    function DonutChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        this.donutChart = require('britecharts/dist/umd/donut.min');
        this.d3Selection = require('d3-selection');
        this.colors = require('britecharts/dist/umd/colors.min');
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    DonutChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    DonutChartComponent.prototype.drawChart = function () {
        var _this = this;
        this.donut = this.donutChart();
        var donutContainer = this.d3Selection.select(this.el).select('.donut-chart-container'), containerWidth = donutContainer.node() ? donutContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.donut.width(containerWidth);
            for (var option in this.chartConfig["properties"]) {
                if (this.donut.hasOwnProperty(option) && option != 'colorSchema') {
                    this.donut[option](this.chartConfig["properties"][option]);
                }
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        this.donut.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    this.donut.colorSchema(this.chartConfig['colors']['customSchema']);
                }
            }
            donutContainer.datum(this.data).call(this.donut);
            if (this.chartConfig.hasOwnProperty('click')) {
                this.d3Selection.select(this.el).selectAll('.donut-chart .arc').on("click", function (ev) { return _this.chartConfig['click'](ev); });
            }
            this.ready.emit(true);
        }
    };
    DonutChartComponent.prototype.redrawChart = function () {
        this.d3Selection.select(this.el).selectAll('.donut-chart').remove();
        this.drawChart();
    };
    return DonutChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], DonutChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DonutChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DonutChartComponent.prototype, "ready", void 0);
DonutChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-donutchart',
        template: "<div class=\"donut-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], DonutChartComponent);
export { DonutChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/donut-chart/DonutChart.component.js.map