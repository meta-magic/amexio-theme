/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DashboardTemplateTeComponent} from "./dashboardtemplate.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {AmexioDashboardModule} from "amexio-ng-extensions/dashboard";
import {AmexioChartModule} from "amexio-ng-extensions/charts";
import {AmexioMapsModule} from "amexio-ng-extensions/maps";

const routes: Routes = [
  { path: '', component: DashboardTemplateTeComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
    AmexioDashboardModule,
    AmexioChartModule,
    AmexioMapsModule
  ],
  exports: [RouterModule],
  declarations : [
    DashboardTemplateTeComponent
  ],
  providers : []
})
export class DashboardTemplateModule { }
