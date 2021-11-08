import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApiService } from '../api.service';
import { multi } from '../data';
import { AngularDayjsService } from 'angular-dayjs';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-temp-data',
  templateUrl: './temp-data.component.html',
  styleUrls: ['./temp-data.component.css']
})
export class TempDataComponent implements OnInit {

  data: any = [];
  multi: any = multi;
  view: any = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Temperature';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#5AA454', 'yellow', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private apiService: ApiService, private dateService: AngularDayjsService) {  }

  ngOnInit() {
    this.apiService.getTempData().subscribe((data)=>{
      console.log('data');
      console.log(data);
      this.data = data;

      console.log('multi ', multi);

    });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  dateTickFormatting(val: string): string {
    return dayjs(val).format('DD/MM/YY');
  }
}


