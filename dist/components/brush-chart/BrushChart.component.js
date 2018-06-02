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
import * as brush from 'britecharts/dist/umd/brush.min';
import * as d3Selection from 'd3-selection';
var BrushChartComponent = (function () {
    function BrushChartComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
        this.el = elementRef.nativeElement;
    }
    BrushChartComponent.prototype.ngOnInit = function () {
        this.drawChart();
        var that = this;
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe(function (data) {
                that.brush.exportChart(data['filename'], data['title']);
            });
        }
    };
    BrushChartComponent.prototype.drawChart = function () {
        this.brush = brush();
        var brushContainer = d3Selection.select(this.el).select('.brush-chart-container'), containerWidth = brushContainer.node() ? brushContainer.node().getBoundingClientRect().width : false;
        if (containerWidth) {
            this.brush.width(containerWidth);
            for (var option in this.chartConfig['properties']) {
                if (this.brush.hasOwnProperty(option)) {
                    this.brush[option](this.chartConfig['properties'][option]);
                }
            }
            brushContainer.datum(this.data).call(this.brush);
            this.ready.emit(true);
        }
    };
    BrushChartComponent.prototype.redrawChart = function () {
        d3Selection.select(this.el).selectAll('.brush-chart').remove();
        this.drawChart();
    };
    return BrushChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrushChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrushChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", Observable)
], BrushChartComponent.prototype, "exportAsImageEvt", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], BrushChartComponent.prototype, "ready", void 0);
BrushChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-brushchart',
        template: "<div class=\"brush-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [ElementRef])
], BrushChartComponent);
export { BrushChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/brush-chart/BrushChart.component.js.map