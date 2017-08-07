import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarChartComponent } from './BarChart.component';

@NgModule({
  declarations: [BarChartComponent],
  exports: [BarChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class BarChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: BarChartModule, providers: [] };
  }
}
