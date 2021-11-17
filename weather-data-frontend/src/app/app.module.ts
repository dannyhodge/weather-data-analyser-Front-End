import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './headersection/headersection.component';
import { TempDataComponent } from './temp-data/temp-data.component';
import { WindDataComponent } from './wind-data/wind-data.component';
import { StationsComponent } from './stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempDataComponent,
    WindDataComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
