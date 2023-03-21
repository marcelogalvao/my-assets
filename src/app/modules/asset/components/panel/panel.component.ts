import { Component, OnInit } from '@angular/core';
import { YahooResponse } from '../../models/yahoo.interface';
import { YahooService } from '../../services/yahoo.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public quotes: YahooResponse[] = [];

  constructor(private yahooService: YahooService) {}

  ngOnInit(): void {
    this.getPetra4();
  }

  private getPetra4() {
    this.yahooService.getPetra4().subscribe(
      (res: YahooResponse[]) => {
        this.quotes = this.handleData(res);
      },
      (error) => {
        this.quotes = [];
      }
    );
  }

  handleData(data: YahooResponse[]) {
    data.reverse();

    // primeiro dia
    const openFirstDay: any = parseFloat(data[0].open).toFixed(2);

    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      if (item.open === null) continue;
      // data
      // formattedData.date = new Date(formattedData.timestamp);

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
}
