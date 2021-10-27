import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headersection/headersection.component';
import { TempDataComponent } from './temp-data/temp-data.component';
import { WindDataComponent } from './wind-data/wind-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempDataComponent,
    WindDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
