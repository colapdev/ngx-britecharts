import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
