import { Component, Input } from '@angular/core';
import { YahooResponse } from '../../models/yahoo.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input('quotes') public quotes: YahooResponse[] = [];
}
