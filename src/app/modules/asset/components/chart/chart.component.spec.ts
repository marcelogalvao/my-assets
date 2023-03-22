import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';

const quotes = [
  { date: '2023-01-01', open: 1.0, symbol: 'test' },
  { date: '2023-01-01', open: 1.0, symbol: 'test' },
];

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test loadChart()', () => {
    component.quotes = quotes;
    component.ngOnInit();

    expect(component.barChartData.datasets[0].data.length).toEqual(2);
    expect(component.barChartData?.labels?.length).toEqual(2);
  });
});
