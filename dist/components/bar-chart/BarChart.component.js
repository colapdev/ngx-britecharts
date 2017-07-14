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
import { LegendChartComponent } from '../legend-chart/LegendChart.component';
var BarChartComponent = (function () {
    function BarChartComponent() {
        var _this = this;
        this.d3Selection = require('d3-selection');
        this.barChart = require('britecharts/dist/umd/bar.min');
        this.miniTooltip = require('britecharts/dist/umd/mini-tooltip.min');
        this.colors = require('britecharts/dist/umd/colors.min');
        Observable.fromEvent(window, 'resize')
            .debounceTime(250)
            .subscribe(function () {
            _this.redrawChart();
        });
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.drawChart(false);
    };
    BarChartComponent.prototype.drawChart = function (redrawing) {
        var _this = this;
        var bar = this.barChart(), tooltip = this.miniTooltip(), barContainer = this.d3Selection.select('.bar-chart-container'), containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false, tooltipContainer;
        if (containerWidth) {
            bar.width(containerWidth);
            bar.reverseColorList(false);
            for (var option in this.chartConfig["properties"]) {
                if (bar.hasOwnProperty(option) && option != 'colorSchema') {
                    bar[option](this.chartConfig["properties"][option]);
                }
            }
            var showTooltip = false;
            if (this.chartConfig.hasOwnProperty('tooltip')) {
                if (this.chartConfig['tooltip'].hasOwnProperty('show') && this.chartConfig['tooltip']['show'] === true) {
                    showTooltip = true;
                    if (this.chartConfig['tooltip']['useDefaultEvents'] === true) {
                        bar.on('customMouseOver', tooltip.show);
                        bar.on('customMouseMove', tooltip.update);
                        bar.on('customMouseOut', tooltip.hide);
                    }
                    else {
                        bar.on('customMouseOver', this.chartConfig['tooltip']['mouseOver']);
                        bar.on('customMouseMove', this.chartConfig['tooltip']['mouseMove']);
                        bar.on('customMouseOut', this.chartConfig['tooltip']['mouseOut']);
                    }
                }
            }
            if (this.chartConfig.hasOwnProperty('colors')) {
                if (this.chartConfig['colors'].hasOwnProperty('colorSchema')) {
                    if (this.colors.colorSchemas.hasOwnProperty(this.chartConfig['colors']['colorSchema'])) {
                        bar.colorSchema(this.colors.colorSchemas[this.chartConfig['colors']['colorSchema']]);
                    }
                }
                else if (this.chartConfig['colors'].hasOwnProperty('customSchema')) {
                    bar.colorSchema(this.chartConfig['colors']['customSchema']);
                }
            }
            for (var d in this.data) {
                this.data[d]["id"] = d;
                this.data[d]["quantity"] = this.data[d]["value"];
            }
            barContainer.datum(this.data).call(bar);
            if (this.legendChart && !redrawing) {
                this.legendChart.data = this.data;
                this.legendChart.chartConfig = this.chartConfig;
                this.legendChart.drawLegend();
            }
            if (this.chartConfig.hasOwnProperty('click')) {
                this.d3Selection.selectAll('.bar-chart .bar').on("click", function (ev) { return _this.chartConfig['click'](ev); });
            }
            if (showTooltip) {
                tooltipContainer = this.d3Selection.select('.bar-chart .metadata-group');
                tooltipContainer.datum([]).call(tooltip);
            }
        }
    };
    BarChartComponent.prototype.redrawChart = function () {
        var container = this.d3Selection.select('.bar-chart-container');
        container.selectAll("*").remove();
        this.drawChart(true);
    };
    return BarChartComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "chartConfig", void 0);
__decorate([
    Input(),
    __metadata("design:type", LegendChartComponent)
], BarChartComponent.prototype, "legendChart", void 0);
BarChartComponent = __decorate([
    Component({
        selector: 'ngx-bc-barchart',
        template: "<div class=\"bar-chart-container\"></div> "
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);
export { BarChartComponent };
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/bar-chart/BarChart.component.js.map