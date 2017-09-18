import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonutChartComponent } from './DonutChart.component';

@NgModule({
  declarations: [DonutChartComponent],
  exports: [DonutChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class DonutChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DonutChartModule, providers: [] };
  }
}
