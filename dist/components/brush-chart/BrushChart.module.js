var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrushChartComponent } from './BrushChart.component';
var BrushChartModule = BrushChartModule_1 = (function () {
    function BrushChartModule() {
    }
    BrushChartModule.forRoot = function () {
        return { ngModule: BrushChartModule_1, providers: [] };
    };
    return BrushChartModule;
}());
BrushChartModule = BrushChartModule_1 = __decorate([
    NgModule({
        declarations: [BrushChartComponent],
        exports: [BrushChartComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], BrushChartModule);
export { BrushChartModule };
var BrushChartModule_1;
//# sourceMappingURL=/home/martin/Escritorio/ngx publish/ngx-britecharts/src/components/brush-chart/BrushChart.module.js.map