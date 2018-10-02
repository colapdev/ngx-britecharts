import { Component, EventEmitter, ViewChild } from '@angular/core';
import { SparklineChartData } from '@colap-dev/ngx-britecharts/demo/data/SparklineChartData';
import { ChartComponent } from '@colap-dev/ngx-britecharts/dist';
import { BarChartData } from './../../../data/BarChartData';
import { BrushChartData } from './../../../data/BrushChartData';
import { BulletChartData } from './../../../data/BulletChartData';
import { DonutChartData } from './../../../data/DonutChartData';
import { GrouppedBarChartData } from './../../../data/GrouppedBarData';
import { HeatmapChartData } from './../../../data/HeatmapChartData';
import { HorizontalStackedBarChartData } from './../../../data/HorizontalStackedBarChartData';
import { LineChartData } from './../../../data/LineChartData';
import { ScatterPlotChartData } from './../../../data/ScatterPlotChartData';
import { StackedAreaChartData } from './../../../data/StackedAreaChartData';
import { StepChartData } from './../../../data/StepChartData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('barChart') barChart: ChartComponent;
  @ViewChild('horizontalBarChart') horizontalBarChart: ChartComponent;
  @ViewChild('lineChart') lineChart: ChartComponent;
  @ViewChild('donutChart') donutChart: ChartComponent;
  @ViewChild('donutLegendChart') donutLegendChart: ChartComponent;
  @ViewChild('brushChart') brushChart: ChartComponent;
  @ViewChild('stackedAreaChart') stackedAreaChart: ChartComponent;
  @ViewChild('gruppedBarChart') gruppedBarChart: ChartComponent;
  @ViewChild('horizontalStackedBarChart') horizontalStackedBarChart: ChartComponent;
  @ViewChild('bulletChart1') bulletChart1: ChartComponent;
  @ViewChild('bulletChart2') bulletChart2: ChartComponent;
  @ViewChild('bulletChart3') bulletChart3: ChartComponent;
  @ViewChild('heatmapChart') heatmapChart: ChartComponent;
  @ViewChild('sparklineChart') sparklineChart: ChartComponent;

  private barChartDataGen: BarChartData = new BarChartData();
  private bulletChartDataGen: BulletChartData = new BulletChartData();
  private lineChartDataGen: LineChartData = new LineChartData();
  private donutChartDataGen: DonutChartData = new DonutChartData();
  private brushChartDataGen: BrushChartData = new BrushChartData();
  private stepChartDataGen: StepChartData = new StepChartData();
  private stackedAreaChartDataGen: StackedAreaChartData = new StackedAreaChartData();
  private grouppedBarChartDataGen: GrouppedBarChartData = new GrouppedBarChartData();
  private horizontalStackedBarChartDataGen: HorizontalStackedBarChartData = new HorizontalStackedBarChartData();
  private scatterPlotChartDataGen: ScatterPlotChartData = new ScatterPlotChartData();
  private heatmapChartDataGen: HeatmapChartData = new HeatmapChartData();
  private sparklineChartDataGen: SparklineChartData = new SparklineChartData();

  // barChart
  public firstBarChartData = this.barChartDataGen.getLetterBarChartData();
  public firstBarChartConfig = {
    properties: {
      hasPercentage: true,
      enableLabels: false,
      labelsNumberFormat: '.0%',
      height: 300
    },
    click: this.onDemoChartClick,
  };

  // horizontalBarChart
  public horizontalBarChartData = this.barChartDataGen.getHorizontalBarChartData();
  public horizontalBarChartConfig = {
    properties: {
      isHorizontal: true,
      isAnimated: true,
      margin: {
        left: 120,
        right: 20,
        top: 20,
        bottom: 30
      },
      yAxisPaddingBetweenChart: 30,
      height: 300,
      percentageAxisToMaxRatio: 1.3,
    },
    colors: {
      colorSchema: 'britecharts'
    },
    click: this.onDemoChartClick,
  };

  // lineChart
  public lineChartData = this.lineChartDataGen.geLineChartData();
  public lineChartConfig = {
    properties: {
      isAnimated: true,
      aspectRatio: 0.5,
      grid: 'horizontal',
      tooltipThreshold: 600,
      margin: {
        top: 60,
        bottom: 50,
        left: 50,
        right: 30
      },
      dateLabel: 'fullDate',
    },
    click: this.onDemoLineChartClick,
  };

  // donutChart and donutLegendChart
  public donutChartData = this.donutChartDataGen.getDonutChartData();
  public donutChartConfig = {
    properties: {
      isAnimated: true,
      highlightSliceById: 2,
    },
    sizeRelativeToWidth: {
      width: 1,
      height: 1,
      externalRadius: 2.5,
      internalRadius: 5
    },
    click: this.onDemoChartClick,
  };
  public donutLegendChartConfig = {
    properties: {
      height: 200,
      numberFormat: 's'
    },
    click: this.onDemoChartClick,
  };

  // brushChart
  public brushChartData = this.brushChartDataGen.getBrushChartData();
  public brushChartConfig = {
    properties: {
      height: 150,
    }
  };

  // stepChart
  public stepChartData = this.stepChartDataGen.getStepChartData();
  public stepChartConfig = {
    properties: {
      height: 300,
      xAxisLabel: 'Meal Type',
      xAxisLabelOffset: 45,
      yAxisLabel: 'Quantity',
      yAxisLabelOffset: -50,
      margin: {
        top: 40,
        right: 40,
        bottom: 50,
        left: 80
      }
    },
    click: this.onDemoChartClick,
  };

  // stackedAreaChart
  public stackedAreaChartData = this.stackedAreaChartDataGen.getStackedAreaChartData();
  public stackedAreaChartConfig = {
    properties: {
      isAnimated: true,
      tooltipThreshold: 600,
      dateLabel: 'dateUTC',
      valueLabel: 'views',
      grid: 'horizontal',
    },
    click: this.onDemoLineChartClick,
  };

  // gruppedBarChart
  public gruppedBarChartData = this.grouppedBarChartDataGen.getGrouppedBarChartData();
  public gruppedBarChartConfig = {
    properties: {
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: true,
      groupLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onDemoChartClick,
  };

  // horizontalStackedBarChart
  public horizontalStackedBarChartData = this.horizontalStackedBarChartDataGen.getHorizontalStackedBarChartData();
  public horizontalStackedBarChartConfig = {
    properties: {
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: true,
      stackLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views',
      betweenBarsPadding: 0.3
    },
    click: this.onDemoChartClick,
  };

  // scatterPlotChart
  public scatterPlotChartData = this.scatterPlotChartDataGen.getScatterPlotChartData();
  public scatterPlotChartConfig = {
    properties: {
      aspectRatio: 0.7,
      circleOpacity: 0.6,
      hasTrendline: true,
      grid: 'horizontal',
      xAxisLabel: 'Temperature (C)',
      margin: {
        left: 60,
        bottom: 50
      },
      yAxisLabel: 'Ice Cream Sales',
      yAxisFormat: '$',
      xAxisFormat: '.1f'
    },
    click: this.onDemoScatterPlotChartClick,
  };

  // bulletChart
  public bulletChartData1 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[0];
  public bulletChartData2 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[1];
  public bulletChartData3 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[2];

  public bulletChartConfig = {
    properties: {
      height: 150,
    },
    click: this.onDemoChartClick,
  };

  // heatmapChart
  public heatmapChartData = this.heatmapChartDataGen.getHeatmapWeeklyChartData();
  public heatmapChartConfig = {
    properties: {
      height: 250
    },
    click: this.onDemoChartClick,
  };

  // sparklineChart
  public sparklineChartData = this.sparklineChartDataGen.getSparklineChartData();
  public sparklineChartConfig = {
    properties: {
      dateLabel: 'dateUTC',
      isAnimated: true,
      duration: 2500
    },
    sizeRelativeToWidth: {
      height: 4,
    },
  };

  // Functions
  public exportBarChart: EventEmitter<any> = new EventEmitter<any>();
  public exportBarChartClick() {
    this.exportBarChart.emit({
      'filename': 'Exported bar chart.png',
      'title': 'Chart title'
    });
  }

  private onDemoChartClick($ev) {
    console.log($ev);
  }

  private onDemoLineChartClick($ev, d, m) {
    console.log($ev, d, m);
  }

  private onDemoScatterPlotChartClick($ev, d, m, s) {
    console.log($ev, d, m, s);
  }








  // OLD


  public configCustomEventsBarChart(ready) {
    /*if (ready) {
      let that = this;
      this.barChart.bar.on('customMouseOver', function () {
        that.barChart.tooltip.show();
      });
      this.barChart.bar.on('customMouseMove', function (data, pos, size) {
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
      this.barChart.bar.on('customMouseOut', function () {
        that.barChart.tooltip.hide();
        that.legendChart.legend.clearHighlight();
      });
    }*/
  }

  public gorupedBarChartConfig = {
    /*properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      groupLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onDemoChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }*/
  };

  public stackedBarChartConfig = {
    /*properties: {
      height: 500,
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: false,
      stackLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    click: this.onDemoChartClick,
    showTooltip: true, // Dont set to true if you are going to use custom mouse events.
    tooltip: {
      topicLabel: "values",
      dateLabel: "key",
      nameLabel: "stack",
      title: "Testing",
    }*/
  };

  public singleLineChartConfig = {
    /*properties: {
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
    }*/
  };

  private lineChartClick($ev, d, m) {
    console.log($ev, d, m);
  }

  public multilineChartConfig = {
    /*properties: {
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
  public multilineBrushChartConfig = {
    properties: {
      height: 125,
      margin: { top: 0, bottom: 0, left: 70, right: 30 }
    },
    //click: this.onDemoChartClick*/
  };

  public configCustomEventsMultilineBrushChartConfig(ready) {
    /*if (ready) {
      let that = this;
      this.multilineBrushChart.brush.on('customBrushEnd', function (brushExtent) {
        that.filterMultilineChartData(brushExtent[0], brushExtent[1]);
      });
    }*/
  }

  private filterMultilineChartData(startDate, endDate) {
    /*if (startDate == null && endDate == null) {
      return this.multilineChartData;
    }
    let iDate = new Date(startDate);
    let eDate = new Date(endDate);
  
    let data = {};
    let that = this;
    data["dataByDate"] = [];
    data["dataByTopic"] = [];
  
    for (let d of this.multilineChartData["dataByDate"]) {
      let aDate = new Date(d["date"]);
      if (iDate <= aDate && aDate <= eDate) {
        data["dataByDate"].push(d);
      }
    }
  
    for (let t of this.multilineChartData["dataByTopic"]) {
      let newTopic = {};
      newTopic["topic"] = t["topic"];
      newTopic["topicName"] = t["topicName"];
      newTopic["dates"] = [];
      for (let d of t["dates"]) {
        let aDate = new Date(d["date"]);
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
    this.multilineChart.redrawChart();*/
  }

  public configCustomEventsBrushChart(ready) {
    /*if (ready) {
      let that = this;
      this.brushChart.brush.on('customBrushStart', function (brushExtent) {
        console.log("Start", brushExtent);
      });
      this.brushChart.brush.on('customBrushEnd', function (brushExtent) {
        console.log("End", brushExtent);
      });
    }*/
  }

  public configCustomEventsDonutChart(ready) {
    /*if (ready) {
      let that = this;
      this.donutChart.donut.on('customMouseOver', function (data) {
        that.donutLegendChart.legend.highlight(data.data["id"]);
      });
      this.donutChart.donut.on('customMouseOut', function (data) {
        that.donutLegendChart.legend.clearHighlight();
      });
    }*/
  }

}
