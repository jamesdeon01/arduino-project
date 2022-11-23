import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SensorSearchComponent } from "./sensor-search/sensor-search.component";


const routes: Routes = [
  {
    path: '',
    component: SensorSearchComponent,
    data: {
      toolbarShadowEnabled: true
    }
  },
  { path: '', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
