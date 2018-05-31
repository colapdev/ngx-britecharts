# ngx-britecharts

**@colap-dev/ngx-britecharts** is an Angular2+ library for creating and displaying [Britecharts](https://github.com/eventbrite/britecharts/) in your web application using D3.js v4. Demo available for Angular's versions 2, 4, 5 and 6.

Don't now what Britecharts is? [Check this out.](http://eventbrite.github.io/britecharts/)

## Demo
Visit https://colapdev.github.io/ngx-britecharts/.

## Installation
```
npm install @colap-dev/ngx-britecharts --save
```

## Using it in your project
Every chart is independent so you must import the ones you want to use.
```
import { BarChartModule, LegendChartModule, GroupedBarChartModule, StackedBarChartModule, LineChartModule, BrushChartModule, DonutChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  imports: [
    ...
    BarChartModule,
    LegendChartModule,
    GroupedBarChartModule,
    StackedBarChartModule,
    LineChartModule,
    BrushChartModule,
    DonutChartModule
    ...
  ],
  declarations: [
   ...
  ],
  providers: [
   ...
  ],
  bootstrap: [...]
})
```

## Adding styles
In order to use the original Britecharts styles you'll need to include the needed CSS files.
There's a base file for all charts and then each chart has it's own CSS.
```
@import '../../node_modules/britecharts/dist/css/common/common.min.css';
@import '../../node_modules/britecharts/dist/css/charts/bar.min.css';
@import '../../node_modules/britecharts/dist/css/charts/grouped-bar.min.css';
@import '../../node_modules/britecharts/dist/css/charts/stacked-bar.min.css';
@import '../../node_modules/britecharts/dist/css/charts/brush.min.css';
@import '../../node_modules/britecharts/dist/css/charts/line.min.css';
@import '../../node_modules/britecharts/dist/css/charts/donut.min.css';
```

## Rendering the chart
### HTML:
```
<ngx-bc-barchart #barChart [data]="firstBarChartData" [chartConfig]="firstBarChartConfig" (ready)="configCustomEventsBarChart($event)"></ngx-bc-barchart>
<ngx-bc-legendchart #legendChart [data]="firstBarChartData" [chartConfig]="firstBarChartConfig"></ngx-bc-legendchart>
<ngx-bc-groupedbarchart #groupedBarChart [data]="groupedBarChartData" [chartConfig]="gorupedBarChartConfig"></ngx-bc-groupedbarchart>
<ngx-bc-stackedbarchart #stackedBarChart [data]="stackedBarChartData" [chartConfig]="stackedBarChartConfig"></ngx-bc-stackedbarchart>
<ngx-bc-linechart #multilineChart [data]="multilineChartData" [chartConfig]="multilineChartConfig"></ngx-bc-linechart>
<ngx-bc-brushchart #multilineBrushChart [data]="multilineChartData.dataByDate" [chartConfig]="multilineBrushChartConfig" (ready)="configCustomEventsMultilineBrushChartConfig($event)"></ngx-bc-brushchart>
<ngx-bc-donutchart #donutChart [data]="donutChartData" [chartConfig]="donutChartConfig" (ready)="configCustomEventsDonutChart($event)"></ngx-bc-donutchart>
</tab>
```

### Component:
```
private firstBarChartData = [...];
private firstBarChartConfig = {
  properties: {
    height: 500,
    usePercentage: true,
    isAnimated: true,
    isHorizontal: false,
    percentageAxisToMaxRatio: 1.3,
    numberFormat: '%'
  },
  colors: {
    customSchema: [...],
  },
  click: this.onBarChartClick,
  showTooltip: false // Dont set to true if you are going to use custom mouse events.
};
```
Check the demos for examples of using custom mouse event handlers.
The **properties** attributes are all optional, they correlate with their corresponding [Britechart chart API](http://eventbrite.github.io/britecharts/module-Bar.html).

#### Exporting the chart
To export the chart the parent component must emit an event that has to binded to the graph component like this (full code in the demos):

**Parent:**

*HTML:*
```
<ngx-bc-barchart [exportAsImageEvt]="exportBarChart" ....></ngx-bc-barchart>
<button (click)="exportBarChartClick()" ....>Export</button>
```
*Component:*
```
private exportBarChart: EventEmitter<any> = new EventEmitter<any>();
private exportBarChartClick() {
    this.exportBarChart.emit({
        'filename': 'Exported bar chart.png', 
        'title': 'Chart title'
    });
}
```
The file name and chart title must be sent inside the event.

### Data format
#### Bar chart:
```
{
    "id": 0, // Optional, if using legend chart and want to highlight on mouse over.
    "name": "A",
    "value": 0.08167,
    "quantity": 0.08167 // Optional, if using legend chart and want to highlight on mouse over.
}
```
#### Grouped Bar chart:
```
{
    "stack": "shiny",
    "name": "Direct4",
    "views": 23,
    "date": "2011-01-08"
}
```
#### Stacked Bar chart:
```
{
    "stack": "sunny",
    "name": "Email4",
    "views": 33,
    "date": "2011-01-08"
}
```
#### Line chart:
```
{
    "dataByTopic": [
        {
            "topic": 103,
            "topicName": "San Francisco",
            "dates": [
                {
                    "date": "2015-06-27T07:00:00.000Z",
                    "value": 1,
                    "fullDate": "2015-06-27T07:00:00.000Z"
                },
            ]
        }
    ],
    "dataByDate": [
        {
            "date": "2015-06-27T07:00:00.000Z",
            "value": 1,
            "topics": [
                {
                    "name": 103,
                    "value": 1,
                    "topicName": "San Francisco"
                },
            ]
        }
    ]
}
```

#### Brush chart:
```
{
    "date": "2015-06-27T07:00:00.000Z",
    "value": 4
}
```

### Donut chart
```
{
    "name": "Other",
    "id": 0,
    "quantity": 814
}
```

## Running the demo
 1. Clone this repo.
 2. *cd* into *demo* folder.
 3. *npm install*
 4. *npm run start*
 5. Browse to http://localhost:4200

## Roadmap
 - 0.1.X - Bar chart and Legend chart available.
 - 0.2.X - Grouped Bar Chart
 - 0.3.X - Stacked Bar Chart
 - 0.4.X - Line Chart and Brush Chart
 - 0.5.X - Donut Chart --> Current release
 - 0.6.X - Stacked Area Chart
 - 0.7.X - Step Chart
 - 0.8.X - Sparkline Chart

**NOTE: EXPECT REAKING CHANGES WITH EACH RELEASE UNTIL WE REACH THE 1.0.0 VERSION.**

## Contributing
We are open to pull requests including:
 - More demos.
 - Better docs.
 - Tests.

## Support
Feel free to open any issue in case you need help.

## Acknowledgments
[Britecharts](https://github.com/eventbrite/britecharts/) community, specially [Marcos Iglesias](https://github.com/miglesiasEB) for his support and patience.

[@dzurico](https://twitter.com/dzurico) for this post http://www.dzurico.com/how-to-create-an-angular-library/.
