import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { PanelComponent } from './components/panel/panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetRoutingModule } from './asset-routing.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AssetComponent, PanelComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AssetRoutingModule,
    NgChartsModule,
  ],
})
export class AssetModule {}
