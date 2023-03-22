import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PanelComponent } from './panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { YahooService } from '../../services/yahoo.service';

const YahooServiceStub = {
  getPetra4: () =>
    of([
      { date: '2023-01-01', open: 1.0, symbol: 'test' },
      { date: '2023-01-01', open: 1.0, symbol: 'test' },
    ]),
};

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        FontAwesomeModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: YahooService, useValue: YahooServiceStub }],
      declarations: [PanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getPetra4()', () => {
    component.ngOnInit();
    expect(component.quotes.length).toEqual(2);
  });
});
