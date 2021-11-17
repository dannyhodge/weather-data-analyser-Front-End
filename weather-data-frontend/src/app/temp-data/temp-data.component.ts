import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { multi } from '../data';
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
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Temperature';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#5AA454', 'yellow', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  monthsSelected: number = 12;

  constructor(private apiService: ApiService) {  }

  ngOnInit() {
    this.getTempData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  onKey(event: any) { 
    this.monthsSelected = event.target.value;
    this.getTempData();
  }

  getTempData() {
    this.apiService.getTempData(this.monthsSelected).subscribe((data)=>{

      this.data = data;

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


