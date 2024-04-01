import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { InfoComponent } from '../../pages/info/info.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltreComponent } from 'src/app/pages/filtre/filtre.component';
import { IndicatorsComponent } from 'src/app/pages/indicators/indicators.component';
import { CompareComponent } from 'src/app/pages/compare-data/compare-data.component';
import { VisualizationComponent } from 'src/app/pages/visualization/visualization.component';
import { ChartsComponent } from 'src/app/pages/charts/charts.component';
import { DataTabsComponent } from 'src/app/pages/data-tabs/data-tabs.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    HighchartsChartModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    InfoComponent,
    FiltreComponent,
    IndicatorsComponent,
    CompareComponent,
    VisualizationComponent,
    ChartsComponent,
    DataTabsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}


export interface Group {
  name: string;
  domains: Domain[];
}

export interface Domain {
  name: string;
  areas: string[];
}
