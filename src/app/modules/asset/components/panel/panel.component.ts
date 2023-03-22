import { Component, OnInit } from '@angular/core';
import { YahooResponse } from '../../models/yahoo.interface';
import { YahooService } from '../../services/yahoo.service';
import { faChartSimple, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public symbol: string = '';
  public quotes: YahooResponse[] = [];
  public isLoading: boolean = false;
  public tabChart: boolean = false;
  public faChartSimple = faChartSimple;
  public faChartLine = faChartLine;

  constructor(private yahooService: YahooService) {}

  ngOnInit(): void {
    this.getPetra4();
  }

  private getPetra4() {
    this.isLoading = true;

    this.yahooService.getPetra4().subscribe(
      (res: YahooResponse[]) => {
        this.quotes = this.handleData(res);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.quotes = [];
      }
    );
  }

  handleData(data: YahooResponse[]) {
    this.symbol = data[0].symbol;

    // ordena
    data.reverse();

    // primeiro dia
    const openFirstDay: any = parseFloat(data[0].open).toFixed(2);

    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      // caso nao possua valor
      if (item.open === null) continue;

      // valor
      item.open = parseFloat(item.open).toFixed(2);

      // diferencas
      if (index === 0) {
        item.differenceD1 = '-';
        item.diffecenceFirstDay = '-';
      } else {
        const d1 = data[index - 1].open;
        item.differenceD1 = (item.open - d1).toFixed(2);
        item.diffecenceFirstDay = (item.open - openFirstDay).toFixed(2);
      }
    }

    return data;
  }

  public showChart(value: boolean) {
    this.tabChart = value;
  }
}
