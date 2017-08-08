import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GroupedBarChartComponent } from './GroupedBarChart.component';

@NgModule({
  declarations: [GroupedBarChartComponent],
  exports: [GroupedBarChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class GroupedBarChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: GroupedBarChartModule, providers: [] };
  }
}
