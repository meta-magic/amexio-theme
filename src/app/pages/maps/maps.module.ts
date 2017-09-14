/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MapsComponent} from "./maps.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {AmexioMapsModule} from "amexio-ng-extensions/maps";

const routes: Routes = [
  { path: '', component: MapsComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
    AmexioMapsModule
  ],
  exports: [RouterModule],
  declarations : [
    MapsComponent
  ],
  providers : []
})
export class MapsModule { }
