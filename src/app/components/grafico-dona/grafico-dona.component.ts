import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // informacion recibida de afuera
  @Input('ChartLabels')public doughnutChartLabels: string[] = []; // ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('ChartData')public doughnutChartData: number[] = []; // [350, 450, 100];
  @Input('ChartType')public doughnutChartType: string = ''; // 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
