import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrushChartComponent } from './BrushChart.component';

@NgModule({
  declarations: [BrushChartComponent],
  exports: [BrushChartComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class BrushChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: BrushChartModule, providers: [] };
  }
}
