import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartComponent } from './Chart.component';

@NgModule({
  declarations: [ChartComponent],
  exports: [ChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ChartModule, providers: [] };
  }
}
