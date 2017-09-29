/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChartsComponent} from "./charts.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {AmexioChartModule} from "amexio-ng-extensions/charts";

const routes: Routes = [
  { path: '', component: ChartsComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
    AmexioChartModule
  ],
  exports: [RouterModule],
  declarations : [
    ChartsComponent
  ],
  providers : []
})
export class ChartsModule { }
