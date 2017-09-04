import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StackedBarChartComponent } from './StackedBarChart.component';

@NgModule({
  declarations: [StackedBarChartComponent],
  exports: [StackedBarChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class StackedBarChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: StackedBarChartModule, providers: [] };
  }
}
