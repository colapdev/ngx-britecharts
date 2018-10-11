# ngx-britecharts

**@colap-dev/ngx-britecharts** is an Angular2+ library for creating and displaying [Britecharts](https://github.com/eventbrite/britecharts/) in your web application using D3.js v4. Demo available for Angular's versions 2, 4 and 5.

Don't now what Britecharts is? [Check this out.](http://eventbrite.github.io/britecharts/)

## Demo

Visit https://colapdev.github.io/ngx-britecharts/.

## Installation

```shell
npm install @colap-dev/ngx-britecharts --save
```

## Using it in your project

Include the charts module.

```typescript
import { ChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  imports: [
    ...
    ChartModule,
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

```typescript
@import '../../node_modules/britecharts/dist/css/common/common.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/bar.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/brush.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/bullet.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/donut.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/grouped-bar.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/line.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/scatter-plot.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/sparkline.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/stacked-area.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/stacked-bar.min.css';
@import '../../../node_modules/britecharts/dist/css/charts/step.min.css';
```

## Chart types

Each chart type is defined by a number defined in the enum **ChartType**.

```typescript
Bar = 1
Brush = 2
Bullet = 3
Donut = 4
GroupedBar = 5
Heatmap = 6
Legend = 7
Line = 8
ScatterPlot = 9
Sparkline = 10
StackedArea = 11
StackedBar = 12
Step = 13
```

## Rendering the chart

### HTML

```html
<ngx-bc-chart #lineChart [data]="lineChartData" [chartConfig]="lineChartConfig" [chartType]="8"></ngx-bc-chart>
```

### Component

```typescript
@ViewChild('lineChart') lineChart: ChartComponent;
private lineChartData = [...];
private lineChartConfig = {
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
```

Check the demos for examples of chart configurations.

- The **properties** attributes are all optional, they correlate with their corresponding [Britechart chart API](http://eventbrite.github.io/britecharts/module-Bar.html).
- The **click** handler expects a function.
- If the **tooltip** attribute exists the corresponding tooltip for the chart will be set up. In some cases it is the [Mini-tooltip](http://eventbrite.github.io/britecharts/module-Mini-tooltip.html) and in others it is the [Tooltip](http://eventbrite.github.io/britecharts/module-Tooltip.html). Check [Britechart docs for more info](http://eventbrite.github.io/britecharts/).
- If the **loading** attribute is present and it is **true** then the chart will show it loading state. Some charts doesn't have a loading state. In that case nothing will be shown (not even the chart).
- In some cases, specially the donut chart, you will like to have some properties values to be related to the container's width. To achieve this you'll have to define **sizeRelativeToContainerWidth** in the config object. Every key contained in it will have its value set by dividing the container's width by the value set. Check **donutChartConfig** in the examples to see how this works.
- If you would like to handle the custom events fired by the chart you should include the **events** attribute in the config. Each member of this attribute should be a custom event defined by Britecharts and a function to hanlde it. Check **donutChartConfig** in the examples to see how this works. Please mind that this may override the events used by the tootlip.

It's worth noting that all the API is exposed and public so you can interact with the chart and it's tooltip from your component. In the line chart example defined above you can access it and it's corresponding tooltip by doing:

```typescript
this.lineChart.chart...
this.lineChart.tooltip...
```

#### Exporting the chart

To export the chart just call the **exportChart** function the chart exposes.

**Parent:**

*HTML:*

```html
<ngx-bc-chart #lineChart ....></ngx-bc-chart>
<button (click)="exportChartClick()" ....>Export</button>
```

*Component:*

```typescript
@ViewChild('lineChart') lineChart: ChartComponent;
private exportChartClick() {
    this.lineChart.chart.exportChart('Exported bar chart.png', 'Chart title');
}
```

The file name and chart title must be sent inside the event.

### Data format

The data format used by the charts is the same defined by Britecharts, you can check each available type in their [docs](http://eventbrite.github.io/britecharts/global.html).

## Running the demo

 1. Clone this repo.
 2. *cd* into *demo* folder.
 3. *npm install*
 4. *npm run start*
 5. Browse to http://localhost:4200

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
