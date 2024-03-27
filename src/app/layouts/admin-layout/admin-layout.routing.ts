import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { InfoComponent } from '../../pages/info/info.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { FiltreComponent } from 'src/app/pages/filtre/filtre.component';
import { Filtrev2Component } from 'src/app/pages/filtrev2/filtrev2.component';
import { IndicatorsComponent } from 'src/app/pages/indicators/indicators.component';
import { CompareComponent } from 'src/app/pages/compare-data/compare-data.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'info',          component: InfoComponent },
    { path: 'filtre',          component: FiltreComponent },
    { path: 'indicators', component: IndicatorsComponent },
    { path: 'compare-data', component: CompareComponent },
    { path: 'filtrev2', component: Filtrev2Component },
    { path: 'maps',           component: MapsComponent }
];
