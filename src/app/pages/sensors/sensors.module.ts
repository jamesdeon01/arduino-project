import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorRegisterComponent } from './sensor-register/sensor-register.component';
import { SensorSearchComponent } from './sensor-search/sensor-search.component';



@NgModule({
  declarations: [
    SensorRegisterComponent,
    SensorSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SensorsModule { }
