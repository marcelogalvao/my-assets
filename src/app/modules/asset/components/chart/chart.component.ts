import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { YahooResponse } from '../../models/yahoo.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input('quotes') public quotes: any = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  ngOnInit(): void {
    this.loadChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadChart();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Valor',
        backgroundColor: '#9BD0F5',
        borderColor: '#36A2EB',
      },
    ],
  };

  private loadChart() {
    this.barChartData.datasets[0].data = [];
    this.barChartData.labels = [];

    this.quotes.forEach((item: YahooResponse) => {
      this.barChartData.datasets[0].data.push(item.open);

      const date = new Date(item.date).toISOString().slice(0, 10);
      this.barChartData.labels?.push(date);
    });
  }
}
