import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: [ './radar-chart.component.scss' ]
})
export class RadarChartComponent {
  @Input() radarChartLabels: string[] = [ 'Tosa Higiênica', 'Vacinas', 'Banho', 'Tosa completa', 'Renovar Higienie', 'Desfile', 'Checkup' ];

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Novos clientes' },
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Clientes com até um ano de fidelidade' },
      { data: [ 80, 90, 70, 100, 70, 80, 90 ], label: 'Clientes com mais de um ano de fidelidade' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}