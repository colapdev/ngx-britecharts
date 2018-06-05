webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <tabset>\n      <tab heading=\"Bar charts\">\n        <div class=\"col-sm-9\">\n          <ngx-bc-barchart #barChart [data]=\"firstBarChartData\" [chartConfig]=\"firstBarChartConfig\" [exportAsImageEvt]=\"exportBarChart\" (ready)=\"configCustomEventsBarChart($event)\"></ngx-bc-barchart>\n          <button class=\"btn btn-default\" (click)=\"exportBarChartClick()\">Export</button>\n        </div>\n        <div class=\"col-sm-3\">\n          <ngx-bc-legendchart #legendChart [data]=\"firstBarChartData\" [chartConfig]=\"firstBarChartConfig\"></ngx-bc-legendchart>\n        </div>\n      </tab>\n      <tab heading=\"Grouped bar chart\">\n        <ngx-bc-groupedbarchart #groupedBarChart [data]=\"groupedBarChartData\" [chartConfig]=\"gorupedBarChartConfig\"></ngx-bc-groupedbarchart>\n      </tab>\n      <tab heading=\"Stacked bar chart\">\n        <ngx-bc-stackedbarchart #stackedBarChart [data]=\"stackedBarChartData\" [chartConfig]=\"stackedBarChartConfig\"></ngx-bc-stackedbarchart>\n      </tab>\n      <tab heading=\"Single line chart\">\n        <ngx-bc-linechart #singleLineChart [data]=\"singleLineChartData\" [chartConfig]=\"singleLineChartConfig\"></ngx-bc-linechart>\n      </tab>\n      <tab heading=\"Multiline chart\">\n        <ngx-bc-linechart #multilineChart [data]=\"multilineChartData\" [chartConfig]=\"multilineChartConfig\"></ngx-bc-linechart>\n        <ngx-bc-brushchart #multilineBrushChart [data]=\"multilineChartData.dataByDate\" [chartConfig]=\"multilineBrushChartConfig\" (ready)=\"configCustomEventsMultilineBrushChartConfig($event)\"></ngx-bc-brushchart>\n      </tab>\n      <tab heading=\"Brush chart\">\n        <ngx-bc-brushchart #brushChart [data]=\"brushChartData\" [chartConfig]=\"brushChartConfig\" (ready)=\"configCustomEventsBrushChart($event)\"></ngx-bc-brushchart>\n      </tab>\n      <tab heading=\"Donut chart\">\n        <div class=\"col-sm-6 col-sm-offset-3 text-center\">\n          <ngx-bc-donutchart #donutChart [data]=\"donutChartData\" [chartConfig]=\"donutChartConfig\" (ready)=\"configCustomEventsDonutChart($event)\"></ngx-bc-donutchart>\n        </div>\n        <div class=\"col-sm-6 col-sm-offset-3 text-center\">\n          <ngx-bc-legendchart #donutLegendChart [data]=\"donutChartData\" [chartConfig]=\"donutLegendChartConfig\"></ngx-bc-legendchart>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n  <div class=\"col-xs-12 text-center\">\n    <hr>\n    <h4><a target=\"_blank\" href=\"https://www.colap.io\"><img class=\"colap-logo\" src=\"/ngx-britecharts/assets/logo_light.png\" alt=\"Colap logo\"></a></h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__ = __webpack_require__("./node_modules/@colap-dev/ngx-britecharts/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.firstBarChartData = [{ "name": "A", "id": 0, "value": 0.08167, "quantity": 0.08167 }, { "name": "B", "id": 1, "value": 0.01492, "quantity": 0.01492 }, { "name": "C", "id": 2, "value": 0.02782, "quantity": 0.02782 }, { "name": "D", "id": 3, "value": 0.04253, "quantity": 0.04253 }, { "name": "E", "id": 4, "value": 0.12702, "quantity": 0.12702 }, { "name": "F", "id": 5, "value": 0.02288, "quantity": 0.02288 }, { "name": "G", "id": 6, "value": 0.02015, "quantity": 0.02015 }, { "name": "H", "id": 7, "value": 0.06094, "quantity": 0.06094 }, { "name": "I", "id": 8, "value": 0.06966, "quantity": 0.06966 }, { "name": "J", "id": 9, "value": 0.00153, "quantity": 0.00153 }, { "name": "K", "id": 10, "value": 0.00772, "quantity": 0.00772 }, { "name": "L", "id": 11, "value": 0.04025, "quantity": 0.04025 }, { "name": "M", "id": 12, "value": 0.02406, "quantity": 0.02406 }, { "name": "N", "id": 13, "value": 0.06749, "quantity": 0.06749 }, { "name": "O", "id": 14, "value": 0.07507, "quantity": 0.07507 }, { "name": "P", "id": 15, "value": 0.01929, "quantity": 0.01929 }, { "name": "Q", "id": 16, "value": 0.00095, "quantity": 0.00095 }, { "name": "R", "id": 17, "value": 0.05987, "quantity": 0.05987 }, { "name": "S", "id": 18, "value": 0.06327, "quantity": 0.06327 }, { "name": "T", "id": 25, "value": 0.09056, "quantity": 0.09056 }, { "name": "U", "id": 19, "value": 0.02758, "quantity": 0.02758 }, { "name": "V", "id": 20, "value": 0.00978, "quantity": 0.00978 }, { "name": "W", "id": 21, "value": 0.0236, "quantity": 0.0236 }, { "name": "X", "id": 22, "value": 0.0015, "quantity": 0.0015 }, { "name": "Y", "id": 23, "value": 0.01974, "quantity": 0.01974 }, { "name": "Z", "id": 24, "value": 0.00074, "quantity": 0.00074 }];
        this.firstBarChartConfig = {
            properties: {
                height: 500,
                usePercentage: true,
                isAnimated: true,
                isHorizontal: false,
                percentageAxisToMaxRatio: 1.3,
                numberFormat: '%'
            },
            colors: {
                customSchema: ["#17becf ", "#bcbd22 ", "#7f7f7f ", "#e377c2 ", "#8c564b ", "#9467bd ", "#d62728 ", "#2ca02c ", "#ff7f0e ", "#1f77b4 "],
            },
            click: this.onDemoChartClick,
            showTooltip: false,
        };
        this.exportBarChart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.groupedBarChartData = [
            {
                "stack": "shiny",
                "name": "Direct1",
                "views": 3,
                "date": "2011-01-05"
            },
            {
                "stack": "shiny",
                "name": "Direct2",
                "views": 10,
                "date": "2011-01-06"
            },
            {
                "stack": "shiny",
                "name": "Direct3",
                "views": 16,
                "date": "2011-01-07"
            },
            {
                "stack": "shiny",
                "name": "Direct4",
                "views": 23,
                "date": "2011-01-08"
            },
            {
                "stack": "radiant",
                "name": "Eventbrite1",
                "views": 23,
                "date": "2011-01-05"
            },
            {
                "stack": "radiant",
                "name": "Eventbrite2",
                "views": 16,
                "date": "2011-01-06"
            },
            {
                "stack": "radiant",
                "name": "Eventbrite3",
                "views": 10,
                "date": "2011-01-07"
            },
            {
                "stack": "radiant",
                "name": "Eventbrite4",
                "views": 4,
                "date": "2011-01-08"
            },
            {
                "stack": "luminous",
                "name": "Email1",
                "views": 10,
                "date": "2011-01-05"
            },
            {
                "stack": "luminous",
                "name": "Email2",
                "views": 20,
                "date": "2011-01-06"
            },
            {
                "stack": "luminous",
                "name": "Email3",
                "views": 26,
                "date": "2011-01-07"
            },
            {
                "stack": "luminous",
                "name": "Email4",
                "views": 33,
                "date": "2011-01-08"
            }
        ];
        this.gorupedBarChartConfig = {
            properties: {
                height: 500,
                tooltipThreshold: 600,
                grid: 'horizontal',
                isAnimated: false,
                groupLabel: 'stack',
                nameLabel: 'date',
                valueLabel: 'views'
            },
            click: this.onDemoChartClick,
            showTooltip: true,
            tooltip: {
                topicLabel: "values",
                dateLabel: "key",
                nameLabel: "stack",
                title: "Testing",
            }
        };
        this.stackedBarChartData = [
            {
                "stack": "vivid",
                "name": "Direct1",
                "views": 0,
                "date": "2011-01-05"
            },
            {
                "stack": "vivid",
                "name": "Direct2",
                "views": 10,
                "date": "2011-01-06"
            },
            {
                "stack": "vivid",
                "name": "Direct3",
                "views": 16,
                "date": "2011-01-07"
            },
            {
                "stack": "vivid",
                "name": "Direct4",
                "views": 23,
                "date": "2011-01-08"
            },
            {
                "stack": "sparkling",
                "name": "Eventbrite1",
                "views": 23,
                "date": "2011-01-05"
            },
            {
                "stack": "sparkling",
                "name": "Eventbrite2",
                "views": 16,
                "date": "2011-01-06"
            },
            {
                "stack": "sparkling",
                "name": "Eventbrite3",
                "views": 10,
                "date": "2011-01-07"
            },
            {
                "stack": "sparkling",
                "name": "Eventbrite4",
                "views": 0,
                "date": "2011-01-08"
            },
            {
                "stack": "sunny",
                "name": "Email1",
                "views": 10,
                "date": "2011-01-05"
            },
            {
                "stack": "sunny",
                "name": "Email2",
                "views": 20,
                "date": "2011-01-06"
            },
            {
                "stack": "sunny",
                "name": "Email3",
                "views": 26,
                "date": "2011-01-07"
            },
            {
                "stack": "sunny",
                "name": "Email4",
                "views": 33,
                "date": "2011-01-08"
            }
        ];
        this.stackedBarChartConfig = {
            properties: {
                height: 500,
                tooltipThreshold: 600,
                grid: 'horizontal',
                isAnimated: false,
                stackLabel: 'stack',
                nameLabel: 'date',
                valueLabel: 'views'
            },
            click: this.onDemoChartClick,
            showTooltip: true,
            tooltip: {
                topicLabel: "values",
                dateLabel: "key",
                nameLabel: "stack",
                title: "Testing",
            }
        };
        this.singleLineChartData = { "dataByTopic": [{ "topic": -1, "topicName": "Quantity", "dates": [{ "date": "2016-07-31T07:00:00.000Z", "value": 0, "fullDate": "2016-07-31T00:00:00-07:00" }, { "date": "2016-08-01T07:00:00.000Z", "value": 0, "fullDate": "2016-08-01T00:00:00-07:00" }, { "date": "2016-08-02T07:00:00.000Z", "value": 3, "fullDate": "2016-08-02T00:00:00-07:00" }, { "date": "2016-08-03T07:00:00.000Z", "value": 1, "fullDate": "2016-08-03T00:00:00-07:00" }, { "date": "2016-08-04T07:00:00.000Z", "value": 3, "fullDate": "2016-08-04T00:00:00-07:00" }, { "date": "2016-08-05T07:00:00.000Z", "value": 3, "fullDate": "2016-08-05T00:00:00-07:00" }, { "date": "2016-08-06T07:00:00.000Z", "value": 0, "fullDate": "2016-08-06T00:00:00-07:00" }, { "date": "2016-08-07T07:00:00.000Z", "value": 1, "fullDate": "2016-08-07T00:00:00-07:00" }, { "date": "2016-08-08T07:00:00.000Z", "value": 1, "fullDate": "2016-08-08T00:00:00-07:00" }, { "date": "2016-08-09T07:00:00.000Z", "value": 0, "fullDate": "2016-08-09T00:00:00-07:00" }, { "date": "2016-08-10T07:00:00.000Z", "value": 3, "fullDate": "2016-08-10T00:00:00-07:00" }, { "date": "2016-08-11T07:00:00.000Z", "value": 4, "fullDate": "2016-08-11T00:00:00-07:00" }, { "date": "2016-08-12T07:00:00.000Z", "value": 4, "fullDate": "2016-08-12T00:00:00-07:00" }, { "date": "2016-08-13T07:00:00.000Z", "value": 2, "fullDate": "2016-08-13T00:00:00-07:00" }, { "date": "2016-08-14T07:00:00.000Z", "value": 3, "fullDate": "2016-08-14T00:00:00-07:00" }, { "date": "2016-08-15T07:00:00.000Z", "value": 0, "fullDate": "2016-08-15T00:00:00-07:00" }, { "date": "2016-08-16T07:00:00.000Z", "value": 1, "fullDate": "2016-08-16T00:00:00-07:00" }, { "date": "2016-08-17T07:00:00.000Z", "value": 0, "fullDate": "2016-08-17T00:00:00-07:00" }, { "date": "2016-08-18T07:00:00.000Z", "value": 2, "fullDate": "2016-08-18T00:00:00-07:00" }, { "date": "2016-08-19T07:00:00.000Z", "value": 5, "fullDate": "2016-08-19T00:00:00-07:00" }, { "date": "2016-08-20T07:00:00.000Z", "value": 1, "fullDate": "2016-08-20T00:00:00-07:00" }, { "date": "2016-08-21T07:00:00.000Z", "value": 2, "fullDate": "2016-08-21T00:00:00-07:00" }, { "date": "2016-08-22T07:00:00.000Z", "value": 9, "fullDate": "2016-08-22T00:00:00-07:00" }, { "date": "2016-08-23T07:00:00.000Z", "value": 4, "fullDate": "2016-08-23T00:00:00-07:00" }, { "date": "2016-08-24T07:00:00.000Z", "value": 3, "fullDate": "2016-08-24T00:00:00-07:00" }, { "date": "2016-08-25T07:00:00.000Z", "value": 2, "fullDate": "2016-08-25T00:00:00-07:00" }, { "date": "2016-08-26T07:00:00.000Z", "value": 5, "fullDate": "2016-08-26T00:00:00-07:00" }] }] };
        this.singleLineChartConfig = {
            properties: {
                height: 500,
                tooltipThreshold: 600,
                grid: 'full',
                lineCurve: 'basis',
                topicNameLabel: "topic",
                dateLabel: "fullDate",
                valueLabel: "value",
            },
            click: this.lineChartClick,
            showTooltip: true,
            tooltip: {
                valueLabel: 'value',
                title: 'Quantity Sold'
            }
        };
        this.multilineChartData = { "dataByTopic": [{ "topic": 103, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 1, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 1, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 2, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 3, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 3, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 1, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 2, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 4, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 2, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 6, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 5, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 2, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 7, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 3, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 1, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 8, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 4, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 11, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 5, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 5, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 6, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 16, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 17, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 15, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 12, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "San Francisco" }, { "topic": 149, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 2, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 3, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 1, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 3, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 1, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 2, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 4, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 7, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 5, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 5, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 2, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 8, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 1, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 2, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 7, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 1, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 5, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 2, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 5, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 2, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 2, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 3, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 8, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 11, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 17, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 14, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "topic": 60, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 18, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 1, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 6, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 15, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 32, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 0, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 0, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 0, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 3, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 0, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 0, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 15, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 0, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 0, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 5, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 0, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 1, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 1, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 0, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 0, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 3, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 2, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Los Angeles" }, { "topic": 81, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 1, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 0, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 0, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 0, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 1, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 0, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 2, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 0, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 2, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 7, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 1, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 2, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 0, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 0, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 1, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 2, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 2, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 6, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Oakland" }, { "topic": 0, "topicName": "Other", "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 3, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 9, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 6, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 11, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 7, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 10, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 5, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 10, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 8, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 10, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 6, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 14, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 12, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 17, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 9, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 9, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 11, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 16, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 6, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 7, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 8, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 9, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 5, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 7, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 10, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 8, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 13, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 18, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 14, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 30, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 33, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }] }], "dataByDate": [{ "date": "2015-06-27T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 3, "topicName": "Other" }], "value": 4 }, { "date": "2015-06-28T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 12 }, { "date": "2015-06-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 18, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 33 }, { "date": "2015-06-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 6, "topicName": "Los Angeles" }, { "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-02T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-03T07:00:00.000Z", "topics": [{ "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 8 }, { "date": "2015-07-04T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-05T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-06T07:00:00.000Z", "topics": [{ "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-07T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 25 }, { "date": "2015-07-08T07:00:00.000Z", "topics": [{ "name": 60, "value": 32, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 55 }, { "date": "2015-07-09T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 12, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-10T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 17, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-11T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 9, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-12T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-13T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 20 }, { "date": "2015-07-14T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-15T07:00:00.000Z", "topics": [{ "name": 81, "value": 3, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 16, "topicName": "Other" }], "value": 24 }, { "date": "2015-07-16T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-17T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 12 }, { "date": "2015-07-18T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-19T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 4, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-20T07:00:00.000Z", "topics": [{ "name": 81, "value": 7, "topicName": "Oakland" }, { "name": 103, "value": 8, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-21T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 9 }, { "date": "2015-07-22T07:00:00.000Z", "topics": [{ "name": 60, "value": 5, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 11, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-23T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-24T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 18 }, { "date": "2015-07-25T07:00:00.000Z", "topics": [{ "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-26T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 13, "topicName": "Other" }], "value": 23 }, { "date": "2015-07-27T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 16, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 18, "topicName": "Other" }], "value": 43 }, { "date": "2015-07-28T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 17, "topicName": "San Francisco" }, { "name": 149, "value": 11, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 44 }, { "date": "2015-07-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 15, "topicName": "San Francisco" }, { "name": 149, "value": 17, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 30, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 2, "topicName": "Los Angeles" }, { "name": 81, "value": 6, "topicName": "Oakland" }, { "name": 103, "value": 12, "topicName": "San Francisco" }, { "name": 149, "value": 14, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 33, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-31T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-02T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }] };
        this.multilineChartConfig = {
            properties: {
                height: 500,
                tooltipThreshold: 600,
                grid: 'full',
                lineCurve: 'basis',
                topicNameLabel: "topic",
                dateLabel: "fullDate",
                valueLabel: "value",
            },
            click: this.lineChartClick,
            showTooltip: true,
            tooltip: {
                valueLabel: 'value',
                title: 'Quantity Sold'
            }
        };
        this.multilineBrushChartConfig = {
            properties: {
                height: 125,
                margin: { top: 0, bottom: 0, left: 70, right: 30 }
            },
        };
        this.brushChartData = [{ "date": "2015-06-27T07:00:00.000Z", "value": 4 }, { "date": "2015-06-28T07:00:00.000Z", "value": 12 }, { "date": "2015-06-29T07:00:00.000Z", "value": 33 }, { "date": "2015-06-30T07:00:00.000Z", "value": 17 }, { "date": "2015-07-01T07:00:00.000Z", "value": 17 }, { "date": "2015-07-02T07:00:00.000Z", "value": 16 }, { "date": "2015-07-03T07:00:00.000Z", "value": 8 }, { "date": "2015-07-04T07:00:00.000Z", "value": 14 }, { "date": "2015-07-05T07:00:00.000Z", "value": 11 }, { "date": "2015-07-06T07:00:00.000Z", "value": 14 }, { "date": "2015-07-07T07:00:00.000Z", "value": 25 }, { "date": "2015-07-08T07:00:00.000Z", "value": 55 }, { "date": "2015-07-09T07:00:00.000Z", "value": 15 }, { "date": "2015-07-10T07:00:00.000Z", "value": 26 }, { "date": "2015-07-11T07:00:00.000Z", "value": 21 }, { "date": "2015-07-12T07:00:00.000Z", "value": 16 }, { "date": "2015-07-13T07:00:00.000Z", "value": 20 }, { "date": "2015-07-14T07:00:00.000Z", "value": 26 }, { "date": "2015-07-15T07:00:00.000Z", "value": 24 }, { "date": "2015-07-16T07:00:00.000Z", "value": 29 }, { "date": "2015-07-17T07:00:00.000Z", "value": 12 }, { "date": "2015-07-18T07:00:00.000Z", "value": 16 }, { "date": "2015-07-19T07:00:00.000Z", "value": 11 }, { "date": "2015-07-20T07:00:00.000Z", "value": 29 }, { "date": "2015-07-21T07:00:00.000Z", "value": 9 }, { "date": "2015-07-22T07:00:00.000Z", "value": 26 }, { "date": "2015-07-23T07:00:00.000Z", "value": 21 }, { "date": "2015-07-24T07:00:00.000Z", "value": 18 }, { "date": "2015-07-25T07:00:00.000Z", "value": 15 }, { "date": "2015-07-26T07:00:00.000Z", "value": 23 }, { "date": "2015-07-27T07:00:00.000Z", "value": 43 }, { "date": "2015-07-28T07:00:00.000Z", "value": 44 }, { "date": "2015-07-29T07:00:00.000Z", "value": 67 }, { "date": "2015-07-30T07:00:00.000Z", "value": 67 }, { "date": "2015-07-31T07:00:00.000Z", "value": 0 }, { "date": "2015-08-01T07:00:00.000Z", "value": 0 }, { "date": "2015-08-02T07:00:00.000Z", "value": 0 }];
        this.brushChartConfig = {
            properties: {
                height: 125
            },
        };
        this.donutChartData = [
            {
                "name": "Shiny",
                "id": 1,
                "quantity": 86
            },
            {
                "name": "Blazing",
                "id": 2,
                "quantity": 300
            },
            {
                "name": "Dazzling",
                "id": 3,
                "quantity": 276
            },
            {
                "name": "Radiant",
                "id": 4,
                "quantity": 195
            },
            {
                "name": "Sparkling",
                "id": 5,
                "quantity": 36
            },
            {
                "name": "Other",
                "id": 0,
                "quantity": 814
            }
        ];
        this.donutChartConfig = {
            properties: {
                width: 500,
                height: 500,
                externalRadius: 500 / 2.5,
                internalRadius: 500 / 5,
            },
            click: this.onDemoChartClick,
        };
        this.donutLegendChartConfig = {};
    }
    AppComponent.prototype.exportBarChartClick = function () {
        this.exportBarChart.emit({
            'filename': 'Exported bar chart.png',
            'title': 'Chart title'
        });
    };
    AppComponent.prototype.onDemoChartClick = function ($ev) {
        console.log($ev);
    };
    AppComponent.prototype.configCustomEventsBarChart = function (ready) {
        if (ready) {
            var that_1 = this;
            this.barChart.bar.on('customMouseOver', function () {
                that_1.barChart.tooltip.show();
            });
            this.barChart.bar.on('customMouseMove', function (data, pos, size) {
                that_1.barChart.tooltip.update(data, pos, size);
                // We are about to send a pull request to britecharts in order to make
                // this more efficient.
                for (var _i = 0, _a = that_1.firstBarChartData; _i < _a.length; _i++) {
                    var d = _a[_i];
                    if (d["name"] == data["name"]) {
                        that_1.legendChart.legend.highlight(d["id"]);
                        break;
                    }
                }
            });
            this.barChart.bar.on('customMouseOut', function () {
                that_1.barChart.tooltip.hide();
                that_1.legendChart.legend.clearHighlight();
            });
        }
    };
    AppComponent.prototype.lineChartClick = function ($ev, d, m) {
        console.log($ev, d, m);
    };
    AppComponent.prototype.configCustomEventsMultilineBrushChartConfig = function (ready) {
        if (ready) {
            var that_2 = this;
            this.multilineBrushChart.brush.on('customBrushEnd', function (brushExtent) {
                that_2.filterMultilineChartData(brushExtent[0], brushExtent[1]);
            });
        }
    };
    AppComponent.prototype.filterMultilineChartData = function (startDate, endDate) {
        if (startDate == null && endDate == null) {
            return this.multilineChartData;
        }
        var iDate = new Date(startDate);
        var eDate = new Date(endDate);
        var data = {};
        var that = this;
        data["dataByDate"] = [];
        data["dataByTopic"] = [];
        for (var _i = 0, _a = this.multilineChartData["dataByDate"]; _i < _a.length; _i++) {
            var d = _a[_i];
            var aDate = new Date(d["date"]);
            if (iDate <= aDate && aDate <= eDate) {
                data["dataByDate"].push(d);
            }
        }
        for (var _b = 0, _c = this.multilineChartData["dataByTopic"]; _b < _c.length; _b++) {
            var t = _c[_b];
            var newTopic = {};
            newTopic["topic"] = t["topic"];
            newTopic["topicName"] = t["topicName"];
            newTopic["dates"] = [];
            for (var _d = 0, _e = t["dates"]; _d < _e.length; _d++) {
                var d = _e[_d];
                var aDate = new Date(d["date"]);
                if (iDate <= aDate && aDate <= eDate) {
                    newTopic["dates"].push({
                        'date': aDate,
                        'value': d["value"],
                        'fullDate': d["date"]
                    });
                }
            }
            data["dataByTopic"].push(newTopic);
        }
        this.multilineChart.data = data;
        this.multilineChart.redrawChart();
    };
    AppComponent.prototype.configCustomEventsBrushChart = function (ready) {
        if (ready) {
            var that = this;
            this.brushChart.brush.on('customBrushStart', function (brushExtent) {
                console.log("Start", brushExtent);
            });
            this.brushChart.brush.on('customBrushEnd', function (brushExtent) {
                console.log("End", brushExtent);
            });
        }
    };
    AppComponent.prototype.configCustomEventsDonutChart = function (ready) {
        if (ready) {
            var that_3 = this;
            this.donutChart.donut.on('customMouseOver', function (data) {
                that_3.donutLegendChart.legend.highlight(data.data["id"]);
            });
            this.donutChart.donut.on('customMouseOut', function (data) {
                that_3.donutLegendChart.legend.clearHighlight();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('barChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["a" /* BarChartComponent */])
    ], AppComponent.prototype, "barChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('legendChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["h" /* LegendChartComponent */])
    ], AppComponent.prototype, "legendChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('brushChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["c" /* BrushChartComponent */])
    ], AppComponent.prototype, "brushChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('multilineChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["j" /* LineChartComponent */])
    ], AppComponent.prototype, "multilineChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('multilineBrushChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["c" /* BrushChartComponent */])
    ], AppComponent.prototype, "multilineBrushChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('donutChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["e" /* DonutChartComponent */])
    ], AppComponent.prototype, "donutChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('donutLegendChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__colap_dev_ngx_britecharts_dist__["h" /* LegendChartComponent */])
    ], AppComponent.prototype, "donutLegendChart", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__ = __webpack_require__("./node_modules/@colap-dev/ngx-britecharts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tabs__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["b" /* BarChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["g" /* GroupedBarChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["l" /* StackedBarChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["k" /* LineChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["d" /* BrushChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["i" /* LegendChartModule */],
                __WEBPACK_IMPORTED_MODULE_3__colap_dev_ngx_britecharts_dist__["f" /* DonutChartModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map