import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BarChartModule, LegendChartModule, GroupedBarChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    GroupedBarChartModule,
    LegendChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
