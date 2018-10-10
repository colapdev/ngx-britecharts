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
    tooltip: {},
    loading: false
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
    tooltip: {}
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
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold',
    },
    loading: false
  };

  // donutChart and donutLegendChart
  public donutChartData = this.donutChartDataGen.getDonutChartData();
  public donutChartConfig = {
    properties: {
      isAnimated: true,
      highlightSliceById: 2,
    },
    sizeRelativeToContainerWidth: {
      width: 1,
      height: 1,
      externalRadius: 2.5,
      internalRadius: 5
    },
    click: this.onDemoChartClick,
    events: {
      customMouseOver: (data) => {
        this.donutLegendChart.chart.highlight(data.data['id']);
      },
      customMouseOut: (demo) => {
        this.donutLegendChart.chart.clearHighlight();
      }
    }
  };
  public donutLegendChartConfig = {
    properties: {
      height: 200,
      numberFormat: 's'
    },
    click: this.onDemoChartClick
  };

  // brushChart
  public brushChartDates: any = {
    start: undefined,
    end: undefined
  }
  public brushChartData = this.brushChartDataGen.getBrushChartData();
  public brushChartConfig = {
    properties: {
      height: 150,
    },
    events: {
      customBrushStart: (brushExtent) => {
        this.brushChartDates.start = brushExtent[0];
        this.brushChartDates.end = brushExtent[1];
      },
      customBrushEnd: (brushExtent) => {
        this.brushChartDates.start = brushExtent[0];
        this.brushChartDates.end = brushExtent[1];
        this.filterLineChartData();
      }
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
    tooltip: {}
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
    tooltip: {
      valueLabel: 'views',
      topicLabel: 'values',
      title: 'Testing tooltip',
    }
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
    tooltip: {
      topicLabel: 'values',
      dateLabel: 'key',
      nameLabel: 'stack',
      title: 'Testing tooltip',
    }
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
    tooltip: {
      topicLabel: 'values',
      dateLabel: 'key',
      nameLabel: 'stack',
      title: 'Testing tooltip',
    }
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
    tooltip: {
      valueLabel: 'y',
      nameLabel: 'x',
      numberFormat: '$',
      title: 'Temperature (C)'
    }
  };

  // bulletChart
  public bulletChartData1 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[0];
  public bulletChartData2 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[1];
  public bulletChartData3 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[2];

  public bulletChartConfig = {
    properties: {
      height: 150,
    },
    click: this.onDemoChartClick
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
    sizeRelativeToContainerWidth: {
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

  private filterLineChartData() {
    if (this.brushChartDates.start == null && this.brushChartDates.end == null) {
      this.lineChart.data = this.lineChartDataGen.geLineChartData();;
      this.lineChart.redrawChart();
    } else {
      const iDate = new Date(this.brushChartDates.start);
      const eDate = new Date(this.brushChartDates.end);

      const data: any = {};
      data['dataByDate'] = [];
      data['dataByTopic'] = [];

      for (const d of this.lineChartData['dataByDate']) {
        const aDate = new Date(d['date']);
        if (iDate <= aDate && aDate <= eDate) {
          data['dataByDate'].push(d);
        }
      }

      for (const t of this.lineChartData['dataByTopic']) {
        const newTopic = {};
        newTopic['topic'] = t['topic'];
        newTopic['topicName'] = t['topicName'];
        newTopic['dates'] = [];
        for (const d of t['dates']) {
          const aDate = new Date(d['date']);
          if (iDate <= aDate && aDate <= eDate) {
            newTopic['dates'].push({
              'date': aDate,
              'value': d['value'],
              'fullDate': d['date']
            });
          }
        }
        data['dataByTopic'].push(newTopic);
      }

      this.lineChart.data = data;
      this.lineChart.redrawChart();
    }
  }

}
