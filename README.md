# ngx-britecharts

**@colap-dev/ngx-britecharts** is an Angular2 library for creating and displaying [Britecharts](https://github.com/eventbrite/britecharts/) in your web application using D3.js v4.

Don't now what Britecharts is? [Check this out.](http://eventbrite.github.io/britecharts/)

## Installation
```
npm install @colap-dev/ngx-britecharts --save
```

## Using it in your project
Every chart is independent so you must import the ones you want to use.
```
import { BarChartModule, LegendChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  imports: [
    ...
    BarChartModule,
    LegendChartModule,
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
```

## Rendering the chart
### HTML:
```
<ngx-bc-barchart #barChart [data]="firstBarChartData" [chartConfig]="firstBarChartConfig"></ngx-bc-barchart>
<ngx-bc-legendchart #legendChart [data]="firstBarChartData" [chartConfig]="firstBarChartConfig"></ngx-bc-legendchart>
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
The **properties** attributes are all optional, they correlate with their corresponding [Britechart chart API](http://eventbrite.github.io/britecharts/module-Bar.html) .

### Data format
The data should be an object array with this format:
```
{
	"id": 0,
	"name": "A",
	"value": 0.08167,
	"quantity": 0.08167
}
```

## Running the demo
 1. Clone this repo.
 2. *cd* into *demo* folder.
 3. *npm install*
 4. *npm run start*
 5. Browse to http://localhost:4200

## Roadmap
 - 0.1.0 - Current release. Only Bar chart and Legend chart available.
 - 0.2.0 - Line Chart and Brush Chart
 - 0.3.0 - Donut Chart
 - 0.4.0 - Grouped Bar Chart
 - 0.5.0 - Stacked Bar Chart
 - 0.6.0 - Stacked Area Chart
 - 0.7.0 - Step Chart
 - 0.8.0 - Sparkline Chart
 - TBD - Angular4 support

## Contributing
We are open to pull requests including:
 - More demos.
 - Better docs.
 - Tests.

## Support
Feel free to open any issue in case you need help.

## Acknowledgments
[Britecharts](https://github.com/eventbrite/britecharts/) community, specially [Marcos Iglesias](https://github.com/miglesiasEB) for his support and patience.
