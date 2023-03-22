import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AssetComponent } from './asset.component';
import { YahooService } from './services/yahoo.service';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

const YahooServiceStub = {
  getPetra4: () => of({}),
};

describe('AssetComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: YahooService, useValue: YahooServiceStub }],
      declarations: [AssetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
