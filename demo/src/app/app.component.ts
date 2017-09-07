import { Component, ViewChild } from '@angular/core';
import { LegendChartComponent, BarChartComponent, BrushChartComponent } from '@colap-dev/ngx-britecharts/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  public firstBarChartData = [{ "name": "A", "id": 0, "value": 0.08167, "quantity": 0.08167 }, { "name": "B", "id": 1, "value": 0.01492, "quantity": 0.01492 }, { "name": "C", "id": 2, "value": 0.02782, "quantity": 0.02782 }, { "name": "D", "id": 3, "value": 0.04253, "quantity": 0.04253 }, { "name": "E", "id": 4, "value": 0.12702, "quantity": 0.12702 }, { "name": "F", "id": 5, "value": 0.02288, "quantity": 0.02288 }, { "name": "G", "id": 6, "value": 0.02015, "quantity": 0.02015 }, { "name": "H", "id": 7, "value": 0.06094, "quantity": 0.06094 }, { "name": "I", "id": 8, "value": 0.06966, "quantity": 0.06966 }, { "name": "J", "id": 9, "value": 0.00153, "quantity": 0.00153 }, { "name": "K", "id": 10, "value": 0.00772, "quantity": 0.00772 }, { "name": "L", "id": 11, "value": 0.04025, "quantity": 0.04025 }, { "name": "M", "id": 12, "value": 0.02406, "quantity": 0.02406 }, { "name": "N", "id": 13, "value": 0.06749, "quantity": 0.06749 }, { "name": "O", "id": 14, "value": 0.07507, "quantity": 0.07507 }, { "name": "P", "id": 15, "value": 0.01929, "quantity": 0.01929 }, { "name": "Q", "id": 16, "value": 0.00095, "quantity": 0.00095 }, { "name": "R", "id": 17, "value": 0.05987, "quantity": 0.05987 }, { "name": "S", "id": 18, "value": 0.06327, "quantity": 0.06327 }, { "name": "T", "id": 25, "value": 0.09056, "quantity": 0.09056 }, { "name": "U", "id": 19, "value": 0.02758, "quantity": 0.02758 }, { "name": "V", "id": 20, "value": 0.00978, "quantity": 0.00978 }, { "name": "W", "id": 21, "value": 0.0236, "quantity": 0.0236 }, { "name": "X", "id": 22, "value": 0.0015, "quantity": 0.0015 }, { "name": "Y", "id": 23, "value": 0.01974, "quantity": 0.01974 }, { "name": "Z", "id": 24, "value": 0.00074, "quantity": 0.00074 }];
  public firstBarChartConfig = {
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
    click: this.onBarChartClick,
    showTooltip: false, // Dont set to true if you are going to use custom mouse events.
  };

  @ViewChild('barChart') barChart: BarChartComponent;
  @ViewChild('legendChart') legendChart: LegendChartComponent;
  @ViewChild('brushChart') brushChart: BrushChartComponent;

  private onBarChartClick($ev) {
    console.log($ev);
  }

  public configCustomEventsBarChart(ready) {
    if (ready) {
      let that = this;
      this.barChart.bar.on('customMouseOver', function() {
        that.barChart.tooltip.show();
      });
      this.barChart.bar.on('customMouseMove', function(data, pos, size) {
        that.barChart.tooltip.update(data, pos, size);
        // We are about to send a pull request to britecharts in order to make
        // this more efficient.
        for (let d of that.firstBarChartData) {
          if (d["name"] == data["name"]) {
            that.legendChart.legend.highlight(d["id"]);
            break;
          }
        }
      })
      this.barChart.bar.on('customMouseOut', function() {
        that.barChart.tooltip.hide();
        that.legendChart.legend.clearHighlight();
      });
    }
  }

  public groupedBarChartData = [
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
  public gorupedBarChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      groupLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onBarChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }
  };

  public stackedBarChartData = [
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

  public stackedBarChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      stackLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onBarChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }
  };

  public singleLineChartData = { "dataByTopic": [{ "topic": -1, "topicName": "Quantity", "dates": [{ "date": "2016-07-31T07:00:00.000Z", "value": 0, "fullDate": "2016-07-31T00:00:00-07:00" }, { "date": "2016-08-01T07:00:00.000Z", "value": 0, "fullDate": "2016-08-01T00:00:00-07:00" }, { "date": "2016-08-02T07:00:00.000Z", "value": 3, "fullDate": "2016-08-02T00:00:00-07:00" }, { "date": "2016-08-03T07:00:00.000Z", "value": 1, "fullDate": "2016-08-03T00:00:00-07:00" }, { "date": "2016-08-04T07:00:00.000Z", "value": 3, "fullDate": "2016-08-04T00:00:00-07:00" }, { "date": "2016-08-05T07:00:00.000Z", "value": 3, "fullDate": "2016-08-05T00:00:00-07:00" }, { "date": "2016-08-06T07:00:00.000Z", "value": 0, "fullDate": "2016-08-06T00:00:00-07:00" }, { "date": "2016-08-07T07:00:00.000Z", "value": 1, "fullDate": "2016-08-07T00:00:00-07:00" }, { "date": "2016-08-08T07:00:00.000Z", "value": 1, "fullDate": "2016-08-08T00:00:00-07:00" }, { "date": "2016-08-09T07:00:00.000Z", "value": 0, "fullDate": "2016-08-09T00:00:00-07:00" }, { "date": "2016-08-10T07:00:00.000Z", "value": 3, "fullDate": "2016-08-10T00:00:00-07:00" }, { "date": "2016-08-11T07:00:00.000Z", "value": 4, "fullDate": "2016-08-11T00:00:00-07:00" }, { "date": "2016-08-12T07:00:00.000Z", "value": 4, "fullDate": "2016-08-12T00:00:00-07:00" }, { "date": "2016-08-13T07:00:00.000Z", "value": 2, "fullDate": "2016-08-13T00:00:00-07:00" }, { "date": "2016-08-14T07:00:00.000Z", "value": 3, "fullDate": "2016-08-14T00:00:00-07:00" }, { "date": "2016-08-15T07:00:00.000Z", "value": 0, "fullDate": "2016-08-15T00:00:00-07:00" }, { "date": "2016-08-16T07:00:00.000Z", "value": 1, "fullDate": "2016-08-16T00:00:00-07:00" }, { "date": "2016-08-17T07:00:00.000Z", "value": 0, "fullDate": "2016-08-17T00:00:00-07:00" }, { "date": "2016-08-18T07:00:00.000Z", "value": 2, "fullDate": "2016-08-18T00:00:00-07:00" }, { "date": "2016-08-19T07:00:00.000Z", "value": 5, "fullDate": "2016-08-19T00:00:00-07:00" }, { "date": "2016-08-20T07:00:00.000Z", "value": 1, "fullDate": "2016-08-20T00:00:00-07:00" }, { "date": "2016-08-21T07:00:00.000Z", "value": 2, "fullDate": "2016-08-21T00:00:00-07:00" }, { "date": "2016-08-22T07:00:00.000Z", "value": 9, "fullDate": "2016-08-22T00:00:00-07:00" }, { "date": "2016-08-23T07:00:00.000Z", "value": 4, "fullDate": "2016-08-23T00:00:00-07:00" }, { "date": "2016-08-24T07:00:00.000Z", "value": 3, "fullDate": "2016-08-24T00:00:00-07:00" }, { "date": "2016-08-25T07:00:00.000Z", "value": 2, "fullDate": "2016-08-25T00:00:00-07:00" }, { "date": "2016-08-26T07:00:00.000Z", "value": 5, "fullDate": "2016-08-26T00:00:00-07:00" }] }] };
  public singleLineChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'full',
      lineCurve: 'basis',
      topicNameLabel: "topic",
      dateLabel: "fullDate",
      valueLabel: "value",
    },
    showTooltip: true,
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold'
    }
  };

  public multilineChartData = { "dataByTopic": [{ "topic": 103, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 1, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 1, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 2, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 3, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 3, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 1, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 2, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 4, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 2, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 6, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 5, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 2, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 7, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 3, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 1, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 8, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 4, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 11, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 5, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 5, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 6, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 16, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 17, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 15, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 12, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "San Francisco" }, { "topic": 149, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 2, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 4, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 3, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 1, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 3, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 3, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 1, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 2, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 2, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 4, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 7, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 5, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 5, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 2, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 8, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 1, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 2, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 7, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 1, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 5, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 2, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 5, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 2, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 2, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 3, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 8, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 11, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 17, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 14, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "topic": 60, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 18, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 1, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 6, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 15, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 32, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 0, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 0, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 0, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 3, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 0, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 0, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 15, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 0, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 0, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 5, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 0, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 1, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 1, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 0, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 0, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 3, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 2, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Los Angeles" }, { "topic": 81, "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 0, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 0, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 1, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 0, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 0, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 0, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 0, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 0, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 0, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 0, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 0, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 0, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 1, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 0, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 1, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 1, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 0, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 2, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 3, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 0, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 0, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 0, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 2, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 7, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 0, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 1, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 2, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 0, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 0, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 0, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 1, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 2, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 2, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 6, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }], "topicName": "Oakland" }, { "topic": 0, "topicName": "Other", "dates": [{ "date": "2015-06-27T07:00:00.000Z", "value": 3, "fullDate": "2015-06-27T07:00:00.000Z" }, { "date": "2015-06-28T07:00:00.000Z", "value": 9, "fullDate": "2015-06-28T07:00:00.000Z" }, { "date": "2015-06-29T07:00:00.000Z", "value": 6, "fullDate": "2015-06-29T07:00:00.000Z" }, { "date": "2015-06-30T07:00:00.000Z", "value": 11, "fullDate": "2015-06-30T07:00:00.000Z" }, { "date": "2015-07-01T07:00:00.000Z", "value": 7, "fullDate": "2015-07-01T07:00:00.000Z" }, { "date": "2015-07-02T07:00:00.000Z", "value": 10, "fullDate": "2015-07-02T07:00:00.000Z" }, { "date": "2015-07-03T07:00:00.000Z", "value": 5, "fullDate": "2015-07-03T07:00:00.000Z" }, { "date": "2015-07-04T07:00:00.000Z", "value": 10, "fullDate": "2015-07-04T07:00:00.000Z" }, { "date": "2015-07-05T07:00:00.000Z", "value": 8, "fullDate": "2015-07-05T07:00:00.000Z" }, { "date": "2015-07-06T07:00:00.000Z", "value": 10, "fullDate": "2015-07-06T07:00:00.000Z" }, { "date": "2015-07-07T07:00:00.000Z", "value": 6, "fullDate": "2015-07-07T07:00:00.000Z" }, { "date": "2015-07-08T07:00:00.000Z", "value": 14, "fullDate": "2015-07-08T07:00:00.000Z" }, { "date": "2015-07-09T07:00:00.000Z", "value": 12, "fullDate": "2015-07-09T07:00:00.000Z" }, { "date": "2015-07-10T07:00:00.000Z", "value": 17, "fullDate": "2015-07-10T07:00:00.000Z" }, { "date": "2015-07-11T07:00:00.000Z", "value": 9, "fullDate": "2015-07-11T07:00:00.000Z" }, { "date": "2015-07-12T07:00:00.000Z", "value": 9, "fullDate": "2015-07-12T07:00:00.000Z" }, { "date": "2015-07-13T07:00:00.000Z", "value": 9, "fullDate": "2015-07-13T07:00:00.000Z" }, { "date": "2015-07-14T07:00:00.000Z", "value": 11, "fullDate": "2015-07-14T07:00:00.000Z" }, { "date": "2015-07-15T07:00:00.000Z", "value": 16, "fullDate": "2015-07-15T07:00:00.000Z" }, { "date": "2015-07-16T07:00:00.000Z", "value": 6, "fullDate": "2015-07-16T07:00:00.000Z" }, { "date": "2015-07-17T07:00:00.000Z", "value": 7, "fullDate": "2015-07-17T07:00:00.000Z" }, { "date": "2015-07-18T07:00:00.000Z", "value": 8, "fullDate": "2015-07-18T07:00:00.000Z" }, { "date": "2015-07-19T07:00:00.000Z", "value": 4, "fullDate": "2015-07-19T07:00:00.000Z" }, { "date": "2015-07-20T07:00:00.000Z", "value": 9, "fullDate": "2015-07-20T07:00:00.000Z" }, { "date": "2015-07-21T07:00:00.000Z", "value": 5, "fullDate": "2015-07-21T07:00:00.000Z" }, { "date": "2015-07-22T07:00:00.000Z", "value": 7, "fullDate": "2015-07-22T07:00:00.000Z" }, { "date": "2015-07-23T07:00:00.000Z", "value": 7, "fullDate": "2015-07-23T07:00:00.000Z" }, { "date": "2015-07-24T07:00:00.000Z", "value": 10, "fullDate": "2015-07-24T07:00:00.000Z" }, { "date": "2015-07-25T07:00:00.000Z", "value": 8, "fullDate": "2015-07-25T07:00:00.000Z" }, { "date": "2015-07-26T07:00:00.000Z", "value": 13, "fullDate": "2015-07-26T07:00:00.000Z" }, { "date": "2015-07-27T07:00:00.000Z", "value": 18, "fullDate": "2015-07-27T07:00:00.000Z" }, { "date": "2015-07-28T07:00:00.000Z", "value": 14, "fullDate": "2015-07-28T07:00:00.000Z" }, { "date": "2015-07-29T07:00:00.000Z", "value": 30, "fullDate": "2015-07-29T07:00:00.000Z" }, { "date": "2015-07-30T07:00:00.000Z", "value": 33, "fullDate": "2015-07-30T07:00:00.000Z" }, { "date": "2015-07-31T07:00:00.000Z", "value": 0, "fullDate": "2015-07-31T07:00:00.000Z" }, { "date": "2015-08-01T07:00:00.000Z", "value": 0, "fullDate": "2015-08-01T07:00:00.000Z" }, { "date": "2015-08-02T07:00:00.000Z", "value": 0, "fullDate": "2015-08-02T07:00:00.000Z" }] }], "dataByDate": [{ "date": "2015-06-27T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 3, "topicName": "Other" }], "value": 4 }, { "date": "2015-06-28T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 12 }, { "date": "2015-06-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 18, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 33 }, { "date": "2015-06-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 6, "topicName": "Los Angeles" }, { "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 17 }, { "date": "2015-07-02T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-03T07:00:00.000Z", "topics": [{ "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 8 }, { "date": "2015-07-04T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-05T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-06T07:00:00.000Z", "topics": [{ "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 14 }, { "date": "2015-07-07T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 149, "value": 4, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 25 }, { "date": "2015-07-08T07:00:00.000Z", "topics": [{ "name": 60, "value": 32, "topicName": "Los Angeles" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 55 }, { "date": "2015-07-09T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 12, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-10T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 17, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-11T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 9, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-12T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-13T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 20 }, { "date": "2015-07-14T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 11, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-15T07:00:00.000Z", "topics": [{ "name": 81, "value": 3, "topicName": "Oakland" }, { "name": 103, "value": 2, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 16, "topicName": "Other" }], "value": 24 }, { "date": "2015-07-16T07:00:00.000Z", "topics": [{ "name": 60, "value": 15, "topicName": "Los Angeles" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 6, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-17T07:00:00.000Z", "topics": [{ "name": 103, "value": 3, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 12 }, { "date": "2015-07-18T07:00:00.000Z", "topics": [{ "name": 103, "value": 1, "topicName": "San Francisco" }, { "name": 149, "value": 7, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 16 }, { "date": "2015-07-19T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 149, "value": 1, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 4, "topicName": "Other" }], "value": 11 }, { "date": "2015-07-20T07:00:00.000Z", "topics": [{ "name": 81, "value": 7, "topicName": "Oakland" }, { "name": 103, "value": 8, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 9, "topicName": "Other" }], "value": 29 }, { "date": "2015-07-21T07:00:00.000Z", "topics": [{ "name": 103, "value": 4, "topicName": "San Francisco" }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 5, "topicName": "Other" }], "value": 9 }, { "date": "2015-07-22T07:00:00.000Z", "topics": [{ "name": 60, "value": 5, "topicName": "Los Angeles" }, { "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 11, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 26 }, { "date": "2015-07-23T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 7, "topicName": "San Francisco" }, { "name": 149, "value": 5, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 7, "topicName": "Other" }], "value": 21 }, { "date": "2015-07-24T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 10, "topicName": "Other" }], "value": 18 }, { "date": "2015-07-25T07:00:00.000Z", "topics": [{ "name": 103, "value": 5, "topicName": "San Francisco" }, { "name": 149, "value": 2, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 8, "topicName": "Other" }], "value": 15 }, { "date": "2015-07-26T07:00:00.000Z", "topics": [{ "name": 60, "value": 1, "topicName": "Los Angeles" }, { "name": 103, "value": 6, "topicName": "San Francisco" }, { "name": 149, "value": 3, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 0, "value": 13, "topicName": "Other" }], "value": 23 }, { "date": "2015-07-27T07:00:00.000Z", "topics": [{ "name": 81, "value": 1, "topicName": "Oakland" }, { "name": 103, "value": 16, "topicName": "San Francisco" }, { "name": 149, "value": 8, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 18, "topicName": "Other" }], "value": 43 }, { "date": "2015-07-28T07:00:00.000Z", "topics": [{ "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 17, "topicName": "San Francisco" }, { "name": 149, "value": 11, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 0, "value": 14, "topicName": "Other" }], "value": 44 }, { "date": "2015-07-29T07:00:00.000Z", "topics": [{ "name": 60, "value": 3, "topicName": "Los Angeles" }, { "name": 81, "value": 2, "topicName": "Oakland" }, { "name": 103, "value": 15, "topicName": "San Francisco" }, { "name": 149, "value": 17, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 30, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-30T07:00:00.000Z", "topics": [{ "name": 60, "value": 2, "topicName": "Los Angeles" }, { "name": 81, "value": 6, "topicName": "Oakland" }, { "name": 103, "value": 12, "topicName": "San Francisco" }, { "name": 149, "value": 14, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 33, "topicName": "Other" }], "value": 67 }, { "date": "2015-07-31T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-01T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }, { "date": "2015-08-02T07:00:00.000Z", "topics": [{ "name": 60, "value": 0, "topicName": "Los Angeles" }, { "name": 81, "value": 0, "topicName": "Oakland" }, { "name": 103, "value": 0, "topicName": "San Francisco" }, { "name": 149, "value": 0, "topicName": "Unknown Location with a super hyper mega very very very long name." }, { "name": 0, "value": 0, "topicName": "Other" }], "value": 0 }] };

  public multilineChartConfig = {
    properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'full',
      lineCurve: 'basis',
      topicNameLabel: "topic",
      dateLabel: "fullDate",
      valueLabel: "value",
    },
    showTooltip: true,
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold'
    }
  };

  public brushChartData = [{ "date": "2015-06-27T07:00:00.000Z", "value": 4 }, { "date": "2015-06-28T07:00:00.000Z", "value": 12 }, { "date": "2015-06-29T07:00:00.000Z", "value": 33 }, { "date": "2015-06-30T07:00:00.000Z", "value": 17 }, { "date": "2015-07-01T07:00:00.000Z", "value": 17 }, { "date": "2015-07-02T07:00:00.000Z", "value": 16 }, { "date": "2015-07-03T07:00:00.000Z", "value": 8 }, { "date": "2015-07-04T07:00:00.000Z", "value": 14 }, { "date": "2015-07-05T07:00:00.000Z", "value": 11 }, { "date": "2015-07-06T07:00:00.000Z", "value": 14 }, { "date": "2015-07-07T07:00:00.000Z", "value": 25 }, { "date": "2015-07-08T07:00:00.000Z", "value": 55 }, { "date": "2015-07-09T07:00:00.000Z", "value": 15 }, { "date": "2015-07-10T07:00:00.000Z", "value": 26 }, { "date": "2015-07-11T07:00:00.000Z", "value": 21 }, { "date": "2015-07-12T07:00:00.000Z", "value": 16 }, { "date": "2015-07-13T07:00:00.000Z", "value": 20 }, { "date": "2015-07-14T07:00:00.000Z", "value": 26 }, { "date": "2015-07-15T07:00:00.000Z", "value": 24 }, { "date": "2015-07-16T07:00:00.000Z", "value": 29 }, { "date": "2015-07-17T07:00:00.000Z", "value": 12 }, { "date": "2015-07-18T07:00:00.000Z", "value": 16 }, { "date": "2015-07-19T07:00:00.000Z", "value": 11 }, { "date": "2015-07-20T07:00:00.000Z", "value": 29 }, { "date": "2015-07-21T07:00:00.000Z", "value": 9 }, { "date": "2015-07-22T07:00:00.000Z", "value": 26 }, { "date": "2015-07-23T07:00:00.000Z", "value": 21 }, { "date": "2015-07-24T07:00:00.000Z", "value": 18 }, { "date": "2015-07-25T07:00:00.000Z", "value": 15 }, { "date": "2015-07-26T07:00:00.000Z", "value": 23 }, { "date": "2015-07-27T07:00:00.000Z", "value": 43 }, { "date": "2015-07-28T07:00:00.000Z", "value": 44 }, { "date": "2015-07-29T07:00:00.000Z", "value": 67 }, { "date": "2015-07-30T07:00:00.000Z", "value": 67 }, { "date": "2015-07-31T07:00:00.000Z", "value": 0 }, { "date": "2015-08-01T07:00:00.000Z", "value": 0 }, { "date": "2015-08-02T07:00:00.000Z", "value": 0 }];
  public brushChartConfig = {
    height: 125
  };

  public configCustomEventsBrushChart(ready) {
    if (ready) {
      let that = this;
      this.brushChart.brush.on('customBrushStart', function(brushExtent) {
        console.log("Start", brushExtent);
      });
      this.brushChart.brush.on('customBrushEnd', function(brushExtent) {
        console.log("End", brushExtent);
      });
    }
  }
}
