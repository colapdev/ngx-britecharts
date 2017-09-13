import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LineChartComponent } from './LineChart.component';

@NgModule({
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class LineChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LineChartModule, providers: [] };
  }
}
