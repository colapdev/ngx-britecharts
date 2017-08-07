import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LegendChartComponent } from './LegendChart.component';

@NgModule({
  declarations: [LegendChartComponent],
  exports: [LegendChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class LegendChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LegendChartModule, providers: [] };
  }
}
