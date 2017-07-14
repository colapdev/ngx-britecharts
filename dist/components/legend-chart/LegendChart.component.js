var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
var LegendChartComponent = (function () {
    function LegendChartComponent() {
        var _this = this;
        this.d3Selection = require('d3-selection');
        this.legendChart = require('britecharts/dist/umd/legend.min');
        this.colors = require('britecharts/dist/umd/colors.min');
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
    }
    LegendChartComponent.prototype.ngOnInit = function () {
        this.drawLegend();
    };
    LegendChartComponent.prototype.drawLegend = function () {
        if (this.data) {
            var legendChart = this.legendChart(), legendContainer = this.d3Selection.select('.legend-chart-container'), containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;
            if (containerWidth) {
                legendChart.width(containerWidth);
                for (var option in this.chartConfig["properties"]) {
                    if (legendChart.hasOwnProperty(option) && option != 'colorSchema') {
                        legendChart[option](this.chartConfig["properties"][option]);
                    }
                }
                if (this.chartConfig.hasOwnProperty('colors')) {
                    if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                        if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                            legendChart.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                        }
                    }
                    else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                        legendChart.colorSchema(this.chartConfig['colors']['customSchema']);
                    }
                }
                legendContainer.datum(this.data).call(legendChart);
            }
        }
    };
    LegendChartComponent.prototype.redrawChart = function () {
        var container = this.d3Selection.select('.legend-chart-container');
        container.selectAll("*").remove();
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
LegendChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-legendchart',
        template: "<div class=\"legend-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [])
], LegendChartComponent);
export { LegendChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/legend-chart/LegendChart.component.js.map