import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BarChartModule, LegendChartModule, GroupedBarChartModule } from '@colap-dev/ngx-britecharts/dist';
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
    LegendChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
