import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  constructor() { }

  ngOnInit(): void {
  }

  Userlabels: string[] = ['', '', '', '', ''];
  Userdata: number[] = [10,15,30,20,5];

  salesData: ChartData<'doughnut'> = {
    labels: this.Userlabels,
    datasets: [ {
      data:this.Userdata
    }
      
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Expenses',
      },
    },
  };
}