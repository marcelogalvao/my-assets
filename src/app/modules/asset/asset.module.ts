import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { PanelComponent } from './components/panel/panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetRoutingModule } from './asset-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [AssetComponent, PanelComponent, ChartComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AssetRoutingModule,
    NgChartsModule,
    SharedModule,
  ],
})
export class AssetModule {}
