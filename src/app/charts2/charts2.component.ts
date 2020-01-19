import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-charts2',
  templateUrl: './charts2.component.html',
  styleUrls: ['./charts2.component.css']
})
export class Charts2Component implements OnInit {
  myColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,  
  };
  public pieChartLabels: Label[] = [['Failed'], ['Passed']];
  public pieChartData: SingleDataSet = [50, 40];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#d13537', '#b0o0b5', '#coffee']
    }
];

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

}
