import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BarChartModule, BrushChartModule, DonutChartModule, GroupedBarChartModule, 
  LegendChartModule, LineChartModule, StackedBarChartModule 
} from '@colap-dev/ngx-britecharts/dist';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';

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
    BrushChartModule,
    LegendChartModule,
    DonutChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
