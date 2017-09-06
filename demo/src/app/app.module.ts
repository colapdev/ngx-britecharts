import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BarChartModule, LegendChartModule, GroupedBarChartModule, StackedBarChartModule, LineChartModule } from '@colap-dev/ngx-britecharts/dist';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    BarChartModule,
    GroupedBarChartModule,
    StackedBarChartModule,
    LineChartModule,
    LegendChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
